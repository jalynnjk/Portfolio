//Work with me button will open user's default email program
let workWithMeBtn = document.querySelector('.work-with-me');
let sendEmail = function () {
    window.open('mailto:jalynnking@gmail.com?subject=Regarding your portfolio...&body=`${workWithMeBtn}`');
}
workWithMeBtn.addEventListener('click', sendEmail)

//Projects Carousel (Small Screens)
//Indexes
let currentImageIndex = 0
let prevImageIndex = 0
//Query Variables
let nextBtn = document.querySelector('.next-button')
let prevBtn = document.querySelector('.prev-button')
const images = document.querySelectorAll('.carousel-image')
//Functions
const nextFunction = () => {
    prevImageIndex = currentImageIndex
    if (currentImageIndex === (images.length - 1)) {
        currentImageIndex = 0
    } else {
        currentImageIndex++
    }
    images[prevImageIndex].style.display = 'none';
    images[currentImageIndex].style.display = 'block'
}
const prevFunction = () => {
    prevImageIndex = currentImageIndex;
    currentImageIndex--
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1
    }
    images[currentImageIndex].style.display = 'block'
    images[prevImageIndex].style.display = 'none'
}
//Event Listeners
nextBtn.addEventListener('click', nextFunction)
prevBtn.addEventListener('click', prevFunction)

//Socials text into logo links
//Query Variables
let socialsText = document.querySelector('.socials')
let headerLogo = document.getElementsByClassName('header-logo')
let logo1 = document.querySelector('#logo1')
let logo2 = document.querySelector('#logo2')
console.log(headerLogo)
console.log(logo1)
console.log(logo2)
//Functions
socialsAway = (event) => {
    console.log('working')
    socialsText.remove()
    event.preventDefault();
    logo1.classList.remove('header-logo')
    logo2.classList.remove('header-logo')
}
//Event Listeners
socialsText.addEventListener('click', socialsAway)
