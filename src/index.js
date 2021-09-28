<<<<<<< HEAD
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
=======
const URL = 'https://api.nasa.gov/planetary/apod?api_key=voUerz5tG3epYpsYiAd7kk8ToigkmfY51LBMvhni'
document.addEventListener('DOMContentLoaded', () =>{
fetchData()
let clicked = !true
function fetchData(){
    fetch(URL)
    .then(r=>r.json())
    .then(params => {
        console.log(params)
        const imgContainer = document.querySelector('.img-container')
        imgContainer.appendChild(createImg(params)) 
 
    })
}

function createImg(params) {
    let imgDiv = document.createElement('div');
    let likeBtn = document.createElement('button')
    imgDiv.className = 'img'
    likeBtn.classNam = 'like-btn'
    imgDiv.addEventListener('click', function(e) {
      if(e.target.className === 'like-btn'){
        console.log(e.target.innerHTML)
          imgDiv.lastElementChild.innerHTML = 'Liked'
          //   if(e.target.className === 'like-btn' && e.target.innerHTML === 'Liked'){
          //   imgDiv.lastElementChild.innerHTML = 'Like'   
          //   }   
          }
     
      else if(e.target.className === 'like-btn' && e.target.innerHTML === 'Liked'){
          console.log('clicked sgsi')
          imgDiv.lastElementChild.innerHTML = 'Like'  
      //   }
        }

      })
    // 
    if (params.url.innerHTML = 'youtube'){
      imgDiv.innerHTML = `
      <div>
        <h1> ${params.title} </h1>
        <h3></h3>
      </div>
      <div>
      <iframe width="420" height="315"
      src=${params.url}>
      </iframe> 
      </div>
      <div>
        <h2>MORE:</h2>
            <p>${params.explanation}</p>
      </div>

      <button class="like-btn"> Like </button>

    `
    return imgDiv
    } else{
      imgDiv.innerHTML = `
      <div>
        <h1> ${params.title} </h1>
        <h3></h3>
>>>>>>> 6c89d58d9d9724f0d4bc58d655494f0f91a05245
      </div>
      <div>
<<<<<<< HEAD
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
=======
      <img src=${params.url} class="img"/>
      </div>
      <div>
        <h2>MORE:</h2>
            <p>${params.explanation}</p>
      </div>

      <button class="like-btn"> Like </button>
    `
    return imgDiv

    }
    
  }






})


>>>>>>> 6c89d58d9d9724f0d4bc58d655494f0f91a05245
