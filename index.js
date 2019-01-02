'use strict';
const link = 'https://dog.ceo/api/breeds/image/random/'

  

function getDogImage() {
  let thisNumber = $('.JsInteger').val();
  while (thisNumber >= 51 ) {
    let thisNumber= 3;
  }
  console.log(thisNumber)
  let maybe = (link+thisNumber);
  fetch(maybe)
    .then(response => response.json())
    .then(responseJson => 
      console.log(responseJson))
    .catch(error => console.log('Something went wrong. Try again later.'));
    console.log(maybe);
}



function watchForm() {
  $('.Entry').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});