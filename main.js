// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function clickLike (event){
  mimicServerCall()
  .then((obj)=> {
    let like = event.target
    if(like.textContent === EMPTY_HEART){
      like.textContent = FULL_HEART
      like.classList.add('activated-heart')
    }else{
      like.textContent = EMPTY_HEART
      like.classList.remove('activated-heart')
    }
  })
  .catch(()=>{
    let error = document.querySelector('div#modal')
    setTimeout(()=>{
      error.classList.remove('.hidden')
      console.log(error)
    }, 1000)
  })
}

glyph.forEach(elem => {
  elem.addEventlistener('click', clickLike)
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
