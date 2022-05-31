//On Click: Work With me Button Opens Default Email Application//
//Query Variables
let workWithMeBtns = document.querySelectorAll('.work-with-me');
//Function and Event Listener
workWithMeBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		window.open(
			'mailto:jalynnking@gmail.com?subject=Regarding your portfolio...'
		);
	});
});

//Landing Page: Projects Carousel//
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

//Contact Card: On Clicks Socials will Open Contact Card//
//Query Variables
let contactCard = document.querySelector('.contact-card')
let openCard = document.querySelector('.socials')
let closeCard = document.querySelector('.contact-card-close')
//Functions
openContactCard = (event) => {
	event.preventDefault()
	contactCard.style.display = 'block'
}
closeContactCard = (event) => {
	event.preventDefault()
	contactCard.style.display = 'none'
}
//Event Listeners
openCard.addEventListener('click', openContactCard)
closeCard.addEventListener('click', closeContactCard)

//Open Projects Page as Modal//
//Query Variables
let projectsModalButton = document.querySelector('.projects');
let projectsModal = document.querySelector('.projects-modal');
let mainEl = document.querySelector('.lp-main');
let headerEl = document.querySelector('.lp-header');
//Functions
showProjectsModal = (event) => {
	event.preventDefault();
	projectsModal.style.display = 'block';
	mainEl.style.display = 'none';
	headerEl.style.display = 'none';
};
//Event Listeners
projectsModalButton.addEventListener('click', showProjectsModal);

//Projects Modal: Play/Pause Videos on Mouseover/Mouseleave//
//Query Variables
let videos = document.querySelectorAll('.video');
//Functions and Event Listeners
videos.forEach((video) => {
	video.addEventListener('mouseover', () => {
		video.play();
	});
	video.addEventListener('mouseleave', () => {
		video.pause();
	});
});

//Open Resume Page as Modal//
//Query Variables
let resumeModalBtn = document.querySelector('.resume');
let resumeModal = document.querySelector('.resume-modal');
//Functions
let openResumeModal = (event) => {
	event.preventDefault();
	resumeModal.style.display = 'block';
	mainEl.style.display = 'none';
	headerEl.style.display = 'none';
};
//Event Listeners
resumeModalBtn.addEventListener('click', openResumeModal);

//Resume Carousel//
//Indexes declared previously
//Query Variables
const resumeImages = document.querySelectorAll('.resume-img');
let resumePrevBtn = document.querySelector('.resume-prev-btn');
let resumeNxtBtn = document.querySelector('.resume-next-btn');
//Functions
const nextResumeImgFunction = () => {
	prevImageIndex = currentImageIndex;
	if (currentImageIndex === resumeImages.length - 1) {
		currentImageIndex = 0;
	} else {
		currentImageIndex++;
	}
	resumeImages[prevImageIndex].style.display = 'none';
	resumeImages[currentImageIndex].style.display = 'block';
};
const prevResumeImgFunction = () => {
	prevImageIndex = currentImageIndex;
	currentImageIndex--;
	if (currentImageIndex < 0) {
		currentImageIndex = resumeImages.length - 1;
	}
	resumeImages[currentImageIndex].style.display = 'block';
	resumeImages[prevImageIndex].style.display = 'none';
};
//Event Listener
resumePrevBtn.addEventListener('click', prevResumeImgFunction);
resumeNxtBtn.addEventListener('click', nextResumeImgFunction);
