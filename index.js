//select the tags to manipulate
const p = document.querySelector('p')
const button = document.querySelector('button')
let html = document.querySelector('html')
//add an event listener on the click
button.addEventListener('click', function(){
  // select 3 different random numbers
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

//change the color of the html page
  html.style.backgroundColor = (`rgb(${red},${green}, ${blue})`) 
  

})
