fetch("https://thatsthespir.it/api").then((res) => {
  if (res.ok) {
    res.json().then((data) => {quote(data)});
  } else {
    console.log("ERROR");
  }
});

function quote(data) {
    let main = document.querySelector("main");
      let section = document.createElement("section");
      main.appendChild(section);

      let article__quote = document.createElement("article");
      section.appendChild(article__quote);
      let quote = document.createTextNode(data.quote);
      article__quote.appendChild(quote);
      article__quote.id = "quote";

      let article__author = document.createElement("article");
      section.appendChild(article__author);
      let author = document.createTextNode(" -" + data.author);
      article__author.appendChild(author);
      article__author.id = "author";

      let div = document.createElement("div");
      section.appendChild(div);
      let image = document.createElement("img");
      div.appendChild(image);
      image.src = data.photo;
      div.id = "div__image";

      let button = document.createElement("button");
      section.appendChild(button);
      let buttonText = document.createTextNode("button");
      button.appendChild(buttonText);
      button.id = "button";

      button.addEventListener("click", () => {
        location.reload()
    });
}