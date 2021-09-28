document.addEventListener("DOMContentLoaded", () => {
  // DECLARATION OF VARIABLES //

  const URL =
    "https://api.nasa.gov/planetary/apod?api_key=voUerz5tG3epYpsYiAd7kk8ToigkmfY51LBMvhni";
  let imgDiv = document.createElement("div");
  let status = "unliked";

  // EVENT LISTENER FOR LIKE BUTTON //

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

  // DECLARATION OF FUNCTIONS //

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
    imgDiv.className = "photo";
    imgDiv.innerHTML = `
      <div class='card'>
        <div class='top'>
          <h1 class='title'> ${params.title} </h1>
          <h2 class='date'>${params.date}</h2>
        </div>
        <img src=${params.url} class="img" />
        <div class='botton>
          <div class='info'>
            <h3>About this image:</h3>
            <p class='p'>${params.explanation}</p>
          </div>
          <button id=${status} class="like-btn"> ♡ </button>
        </div>
      </div>

    `;
    return imgDiv;
  }

  // CALL FETCH FUNCTION //

  fetchData();
});
