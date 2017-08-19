console.log("I'm in events.js");


var outputTarget = document.getElementById('output-target');
var pageHeader = document.getElementById('page-header');
var showHeaderText = document.getElementById('page-title');
var inputField = document.getElementById('keypress-input');


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