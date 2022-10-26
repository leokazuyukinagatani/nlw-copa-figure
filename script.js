const card = document.querySelector('.flip-card')
const cardFront = document.querySelector('.flip-card-front')
const cardBack = document.querySelector('.flip-card-back')
const cardInner = document.querySelector('.flip-card-inner')

let userName = document.querySelector('#name')
let userDescription = document.querySelector('#description')
let userPhoto = document.querySelector('#photo')

function flipCard() {
  card.classList.toggle('is-flipped')
}




function save(event) {
  let nameInput = document.querySelector('#input-name')
  let descriptionInput = document.querySelector('#input-description')
  let photoInput = document.querySelector('#input-photo')

  let courseInput = document.querySelector('#input-course')

  if(nameInput.value.length > 0) {
    userName.textContent = nameInput.value
  }
  if(descriptionInput.value.length > 0) {
    userDescription.textContent = descriptionInput.value
  }
  if(photoInput.value.length > 0) {
    userPhoto.src = photoInput.value
  }

  if(courseInput.value == 'ignite'){
    cardFront.style.backgroundImage = `url(./assets/bg-ignite.svg)`
    cardBack.style.backgroundImage = `url(./assets/bg-ignite-flipped.svg)`
    cardInner.style.boxShadow = "0px 26.459px 44.0983px rgba(18, 100, 18, 0.8)"
  } else {
    cardFront.style.backgroundImage = `url(./assets/bg-explorer.svg)`
    cardBack.style.backgroundImage = `url(./assets/bg-explorer-flipped.svg)`
    cardInner.style.boxShadow = "0px 26.459px 44.0983px rgba(18, 18, 150, 0.8)"
  }

  flipCard()
}