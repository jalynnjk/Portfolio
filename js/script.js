//Work with me button will open user's default email program//
let workWithMeBtn = document.querySelector('.work-with-me');
let sendEmail = function () {
	window.open(
		'mailto:jalynnking@gmail.com?subject=Regarding your portfolio...&body=`${workWithMeBtn}`'
	);
};
workWithMeBtn.addEventListener('click', sendEmail);

//Projects Carousel//
//Indexes
let currentImageIndex = 0;
let prevImageIndex = 0;
//Query Variables
let nextBtn = document.querySelector('.next-button');
let prevBtn = document.querySelector('.prev-button');
const images = document.querySelectorAll('.carousel-image');
//Functions
const nextFunction = () => {
	prevImageIndex = currentImageIndex;
	if (currentImageIndex === images.length - 1) {
		currentImageIndex = 0;
	} else {
		currentImageIndex++;
	}
	images[prevImageIndex].style.display = 'none';
	images[currentImageIndex].style.display = 'block';
};
const prevFunction = () => {
	prevImageIndex = currentImageIndex;
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = images.length - 1;
	}
	images[currentImageIndex].style.display = 'block';
	images[prevImageIndex].style.display = 'none';
};
//Event Listeners
nextBtn.addEventListener('click', nextFunction);
prevBtn.addEventListener('click', prevFunction);

//Socials nav link into logo links//
//Query Variables
let socialsText = document.querySelector('.socials');
let headerLogo = document.getElementsByClassName('header-logo');
let logo1 = document.querySelector('#logo1');
let logo2 = document.querySelector('#logo2');
//Functions
socialsAway = (event) => {
	socialsText.remove();
	event.preventDefault();
	logo1.classList.remove('header-logo');
	logo2.classList.remove('header-logo');
};
//Event Listeners
socialsText.addEventListener('click', socialsAway);

//Open Projects Page as Modal//
//Query Variables
let projectsModalButton = document.querySelector('.projects');
let projectsModal = document.querySelector('.projects-modal');
let mainEl = document.querySelector('.lpMain');
let headerEl = document.querySelector('.lpHeader');
//Functions
showProjectsModal = (event) => {
	event.preventDefault();
	projectsModal.style.display = 'block';
	mainEl.style.display = 'none';
	headerEl.style.display = 'none';
	console.log('hi');
};
//Event Listeners
projectsModalButton.addEventListener('click', showProjectsModal);

//Clock projects modal//
//Query Variables
let returnBtn = document.querySelector('.return')
//Functions
returnHome = () => {
    projectsModal.style.display = 'none'
    mainEl.style.display = 'none'
    headerEl.style.display = 'none'
}
//Event Listeners
returnBtn.addEventListener('click', returnHome)
//Get videos to play/pause on projects page when mouse-over/leave events occur//
//Query Variables
let videos = document.querySelectorAll('.video');
// //Event Listeners and function
videos.forEach((video) => {
video.addEventListener('mouseover', () => {
    video.play()
});
video.addEventListener('mouseleave', () => {
    video.pause()
});
});