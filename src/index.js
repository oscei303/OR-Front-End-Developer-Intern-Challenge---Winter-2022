const URL =
  "https://api.nasa.gov/planetary/apod?api_key=voUerz5tG3epYpsYiAd7kk8ToigkmfY51LBMvhni";
document.addEventListener("DOMContentLoaded", () => {
  fetchData();

  function like(e) {
    imgDiv.addEventListener("click", function (event) {
      console.log(event);
    });
  }
  function fetchData() {
    fetch(URL)
      .then((r) => r.json())
      .then((params) => {
        const imgContainer = document.querySelector(".img-container");
        imgContainer.appendChild(createImg(params));
      });
  }

  function createImg(params) {
    console.log(params);
    let imgDiv = document.createElement("div");
    let status = "unliked";
    imgDiv.addEventListener("click", function (e) {
      if (e.target.className === "like-btn" && e.target.id === "unliked") {
        e.target.id = "liked";
        e.target.innerHTML = `♥`;
        console.log("liked", e.target.id, e.target.innerHTML);
      } else if (e.target.className === "like-btn" && e.target.id === "liked") {
        e.target.id = "unliked";
        e.target.innerHTML = `♡`;
        console.log("liked", e.target.id, e.target.innerHTML);
      }
    });

    imgDiv.className = "photo";
    imgDiv.innerHTML = `
      <div class='card'>
      <div>
        <h1 class='title'> ${params.title} </h1>
        <h3 class='date'>${params.date}</h3>
      </div>
      <img src=${params.url} class="img" />
      <div>
        <div class='info'>
          <h2>About this image:</h2>
          <p class='p'>${params.explanation}</p>
        </div>
        <button id=${status} class="like-btn"> ♡ </button>
      </div>
      </div>

    `;
    return imgDiv;
  }
});
