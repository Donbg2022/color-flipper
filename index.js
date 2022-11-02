const p = document.querySelector('p')
const button = document.querySelector('button')
let html = document.querySelector('html')
button.addEventListener('click', function(){
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);


  html.style.backgroundColor = (`rgb(${random1},${random2}, ${random3})`) 
  console.log('vlicled')

})
