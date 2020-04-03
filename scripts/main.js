let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = mImage.getAttribute('src');
    if(mySrc === 'images/backlit.jpg'){
        myImage.setAttribute('src','images/backlit2.jpg')
    }
    else{
        myImage.setAttribute('src','images/backlit.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName||myName ===null){
        setUserName();
    }
    else{
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Happy New Year ' +myName+'!';
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Happy New Year ' +storedName+'!';
}
myButton.onclick = function(){
    setUserName();
}
