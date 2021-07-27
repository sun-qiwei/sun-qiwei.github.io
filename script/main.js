let myHeading = document.querySelector('h1'); //select element from html docments
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/src1.jpeg') {
      myImage.setAttribute('src','images/src2.jpg');
    } else {
      myImage.setAttribute('src','images/src1.jpeg');
    }
}

let myButton = document.querySelector("button").onclick = function(){
    setUserName();
};
function setUserName(){
    let myName = prompt('Please enter  your name.');//displays a dialog box, similar to alert()
    localStorage.setItem('name',myName);// allows us to store data in the browser and retrieve it later
    myHeading.textContent = "Welcome to league of legend,"+myName
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to league of legend, ' + storedName;
  }
  
