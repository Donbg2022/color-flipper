//select the tags to manipulate
const p = document.querySelector('p')
const button = document.querySelector('button')
let html = document.querySelector('html')
let previousColours = []

//add an event listener on the click
button.addEventListener('click', function(){
  // select 3 different random numbers
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

//change the color of the html page
  html.style.backgroundColor = (`rgb(${red},${green},${blue})`) 


  //changes P text to what the rgb value is 
  p.innerText = `rgb(${red},${green},${blue})`

  previousColours.push(`rgb(${red},${green},${blue})`)
  
  // if the array gets to 10 it auto deletes the first item so that my slow laptop doesnt freeze lol
  if (previousColours.length > 9){
    previousColours.shift()
  }
  // makes clicked 0 so it doesnt accumulate and go back too many times in array
  clicked = 0
})

const lastColorbtn = document.querySelector('#lastcolor')
let clicked = 0

// click event listener to enable cycling backwards
lastColorbtn.addEventListener('click', function(e){
  clicked++
//finds the last item of array by taking the length and subtracting one and the uses the clicked variable to let it go back continuously 
  html.style.backgroundColor = previousColours[previousColours.length - (1 + clicked)]  
  //changes p to the rgb value
  p.innerText = previousColours[previousColours.length - (1 + clicked)]
 

})
