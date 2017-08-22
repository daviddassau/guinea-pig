console.log("I'm in events.js");


var outputTarget = document.getElementById('output-target');
var pageHeader = document.getElementById('page-header');
var showHeaderText = document.getElementById('page-title');
var inputField = document.getElementById('keypress-input');
var addColorBTN = document.getElementById('add-color');
var guineaPigText = document.getElementById('guinea-pig');
var makeLargeBTN = document.getElementById('make-large');
var addBorderBTN = document.getElementById('add-border');
var addRoundingBTN = document.getElementById('add-rounding');



function sectionEvents(target){
	outputTarget.innerHTML = `<p>You clicked on the ${target.innerText}</p>`
}

document.body.addEventListener('click', function(event){
	var sectionTarget = event.target;
	if (event.target.className === 'article-section') {
		sectionEvents(sectionTarget);
	}
});



showHeaderText.addEventListener('mouseenter', function(){
	outputTarget.innerHTML = `<p>You moved your mouse over the header</p>`;
});


showHeaderText.addEventListener('mouseleave', function(){
	outputTarget.innerHTML = `<p>You left me!!</p>`;
});


inputField.addEventListener('keypress', function(){
	outputTarget.innerHTML = inputField.value;
});


addColorBTN.addEventListener('click', function(){
	guineaPigText.classList.add("makeItBlue");
});


makeLargeBTN.addEventListener('click', function(){
	guineaPigText.classList.add("makeItBigger");
});


addBorderBTN.addEventListener('click', function(){
	guineaPigText.classList.add("addBorder");
});


addRoundingBTN.addEventListener('click', function(){
	guineaPigText.classList.add('addBorderRadius');
});


document.getElementsByTagName("UL")[0].classList.add('makeItBold');


document.getElementsByTagName("article")[0].classList.add('makeItBoldAndItalics');


document.getElementsByTagName("button")[0].classList.add('button');














