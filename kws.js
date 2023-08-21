console.log('testy test');

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('mouseover', changeBackgroundColor);
});
navLinks.forEach((link) => {
    link.addEventListener('mouseout', revertBackgroundColor);
});
function changeBackgroundColor(event) {
    event.target.style.backgroundColor = '#aecbf5ba';
}
function revertBackgroundColor(event) {
    event.target.style.backgroundColor = 'rgb(65, 78, 18)';
}

window.addEventListener('resize', scaleVideo);
window.addEventListener('load', scaleVideo);

function scaleVideo() {
const video = document.getElementById('bg-video');
const container = document.querySelector('.video-container');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const videoRatio = 16 / 9;

let newWidth = containerWidth;
let newHeight = containerWidth / videoRatio;

if (newHeight < containerHeight) {
    newHeight = containerHeight;
    newWidth = containerHeight * videoRatio;
}

video.style.width = newWidth + 'px';
video.style.height = newHeight + 'px';
}
const icons = document.querySelectorAll('.icon-container i');

icons.forEach((icon) => {
    icon.addEventListener('mouseover', changeColor);
    icon.addEventListener('mouseout', resetColor);
});

function changeColor() {
    const color = this.dataset.color;
    this.style.color = color;
}

function resetColor() {
    this.style.color = "";
}
document.addEventListener('DOMContentLoaded', function() {
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');

    scrollDownArrow.addEventListener('click', function(event) {
    event.preventDefault();
    const section2 = document.getElementById('section2');
    section2.scrollIntoView({ behavior: 'smooth' });
    });
});
