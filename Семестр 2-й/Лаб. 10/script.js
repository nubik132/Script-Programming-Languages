let json = async()
console.log(json);
for (const art of json.articles) {
    let h2 = document.createElement("h2")
    h2.innerText = art.title
    let description = document.createElement("p")
    description.innerText = art.description
    let content = document.createElement("p")
    content.innerText = art.content
    let news = document.createElement("div")
    news.appendChild(h2)
    news.appendChild(description)
    news.appendChild(content)
    document.body.appendChild(news)
}

async function async(){
    let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-01-27&sortBy=publishedAt&apiKey=844d5795b1734116bcae513b4dfbe504");
    console.log("респонс");
    console.log(response);
    console.log("жсон");
    return await response.json();
}