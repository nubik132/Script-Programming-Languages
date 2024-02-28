const category = document.getElementById("category");
const search = document.getElementById("search");

async();

async function async(){
    let response = await fetch(`https://newsapi.org/v2/everything?q=${search.value}&from=2024-01-27&sortBy=publishedAt&apiKey=844d5795b1734116bcae513b4dfbe504&category=${category.options[category.options.selectedIndex]}`);
    let json = await response.json();
    for (const art of json.articles) {
        let h2 = document.createElement("h2")
        h2.innerHTML = art.title
        let description = document.createElement("p")
        description.innerHTML = art.description
        let content = document.createElement("p")
        content.innerHTML = art.content
        let news = document.createElement("div")
        news.appendChild(h2)
        news.appendChild(description)
        news.appendChild(content)
        document.body.appendChild(news)
    }
}