//Work with me button will open user's default email program
let workWithMeBtn = document.querySelector('.work-with-me');
let sendEmail = function () {
    window.open('mailto:jalynnking@gmail.com?subject=Regarding your portfolio...&body=`${workWithMeBtn}`');
}
workWithMeBtn.addEventListener('click', sendEmail)
