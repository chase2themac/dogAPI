'use strict';

function userInput(){
    let thisNumber = ($.JsInteger);
}

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random/'+(userInput))
    .then(response => response.json())
    .then(responseJson => 
      console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});