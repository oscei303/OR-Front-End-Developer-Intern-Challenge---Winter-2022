const URL = 'https://api.nasa.gov/planetary/apod?api_key=voUerz5tG3epYpsYiAd7kk8ToigkmfY51LBMvhni'
document.addEventListener('DOMContentLoaded', () =>{
fetchData()

function fetchData(){
    fetch(URL)
    .then(r=>r.json())
    .then(params => {
        const imgContainer = document.querySelector('.img-container')
        imgContainer.appendChild(createImg(params)) 
 
    })
}

function createImg(params) {
    let imgDiv = document.createElement('div');
    imgDiv.className = 'photo';
    imgDiv.innerHTML = `
      <div>
        <h1> ${params.title} </h1>
        <h3>cc: ${params.copyright}</h3>
      </div>
      <img src=${params.url} class="img" />
      <div>
        <h2>about this img:</h2>
            <p>${params.explanation}</p>
      </div>

      <button class="like-btn"> Like <3 </button>
    `
    return imgDiv;
  }




})


