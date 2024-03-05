from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import json

COMMENTS_FILE = 'comments.json'


def load_comments():
    try:
        with open(COMMENTS_FILE, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []


def save_comments(comments):
    with open(COMMENTS_FILE, 'w') as file:
        json.dump(comments, file)


class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/get_comments':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(load_comments()).encode())
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/add_comment':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            query_params = parse_qs(post_data.decode())

            if 'comment' in query_params:
                new_comment = query_params['comment'][0]
                comments = load_comments()
                comments.append(new_comment)
                save_comments(comments)

                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'Comment added successfully')
            else:
                self.send_response(400)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'Missing "comment" parameter in POST request')
        else:
            super().do_POST()


def run(server_class=HTTPServer, handler_class=CORSRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}')
    httpd.serve_forever()


if __name__ == '__main__':
    run()
