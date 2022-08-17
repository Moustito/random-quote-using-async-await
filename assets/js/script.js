async function fetchQuotes() {
  try {
      const response = await fetch("https://thatsthespir.it/api");
      const data = await response.json();
      document.getElementById("quote").innerHTML = data.quote;
      document.getElementById("author").innerHTML = data.author;
      let photo = document.getElementById("photo")
      console.log(data.photo);
      data.photo == ""? photo.src = "assets/image/user.png": photo.src = data.photo
      document.getElementById("photo").alt = data.author;
  } catch (error) {
      alert("Error", error);
  }
}
document.getElementById("nquote").addEventListener("click", () => {
  fetchQuotes();
});
fetchQuotes();