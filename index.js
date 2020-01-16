console.log('Party on, Wayne!');

var count = 0;
var h1Text = document.querySelector('#counter');
var theBody = document.querySelector('body');

function increase(){
    count++;
    h1Text.innerText = count;
}
function decrease(){
    count--;
    h1Text.innerText = count;
}
function reset(){
    count = 0;
    h1Text.innerText = count;
}
function selectTheme(theme){
    let newClassName = theme.innerText.toLowerCase();
    let buttons = document.querySelectorAll('button');
    theBody.className = newClassName;

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = newClassName;
    }
}