const textDisplay = document.getElementById('animated-text');
const phrases = ['UX Designer ', 'FrontEnd Developer ', 'UX Engineer '];
let iP = 0;
let jP = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

const loopPhrase  = () =>{
	isEnd = false;
	textDisplay.innerHTML = currentPhrase.join('');

	if(iP < phrases.length){
	
		if(!isDeleting && jP <= phrases[iP].length){
			currentPhrase.push(phrases[iP][jP])
			jP++;
			textDisplay.innerHTML = currentPhrase.join('');
		}
		if(isDeleting && jP <= phrases[iP].length){
			currentPhrase.pop(phrases[iP][jP]);
			jP--;
			textDisplay.innerHTML = currentPhrase.join('');
		}
		if (jP == phrases[iP].length){
			isEnd = true;
			isDeleting = true;
		}
		if(isDeleting && jP === 0) {
			currentPhrase = [];
			isDeleting = false;
			iP++;
			if(iP == phrases.length ){
				iP = 0;
			}
		}
	}
	const speedUp = Math.random() * (80 - 50) + 80;
		const normalSpeed = Math.random() * (300 - 200) +200;
		const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
	setTimeout(loopPhrase, time)
}
loopPhrase();
$(document).ready(function () {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	$('nav a[href="#"]').on('click', function () {
		$('html, body').animate(
		{
			scrollTop: $($(this).attr('href')).offset.top -100
		}, 2000);
	});
	$('#up').on('click', function () {

		$('html, body').animate(
		{
			scrollTop: 0
		}, 2000);
		
	});
	
	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});
	
});

function inicializarAno(){
  
   document.getElementById('ano').appendChild(document.createTextNode(new Date().getFullYear()))
}
document.addEventListener('DOMContentLoaded', inicializarAno);


