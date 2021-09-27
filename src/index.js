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
      </div>
      <div>
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


