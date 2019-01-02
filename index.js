'use strict';

const link = 'https://dog.ceo/api/breeds/image/random/'

function getDogImage() {
  let thisNumber = $('.JsInteger').val();
  if (thisNumber >= 51 || thisNumber < 1) {
      thisNumber = 3;
   }
  //console.log()
  let maybe = (link+thisNumber);
  fetch(maybe)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log('Something went wrong. Try again later.'));
    console.log(maybe);
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (let i=0; i< responseJson.message.length; i++){
  $('.results').append(
    `<img src="${responseJson.message[i]}" class="results-img">`
  );
  }
  //display the results section
  $('.results').removeClass('hidden');
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