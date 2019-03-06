var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/checklist.png'){
		myImage.setAttribute('src','images/task-done.png');
	}else{
		myImage.setAttribute('src','images/checklist.png');
	}
}

 var myButton = document.querySelector('button');
 var myHeading = document.querySelector('h1');

 function setUserName(){
 	var myName = prompt('Please enter your name.');
 	localStorage.setItem('name',myName);
 	myHeading.textContent = 'Hi, '+myName;
 }

 myButton.onclick = function(){
 	setUserName();
 }

 if(localStorage.getItem('name')){
 	var storedName = localStorage.getItem('name');
 	myHeading.textContent = 'Hi, '+storedName;
 }else{
 	setUserName();
 }