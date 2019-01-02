'use strict';

const well = 'https://dog.ceo/api/breed/'
const here = '/images/random'



function getDogImage() {
  let thisName = $('.JsString').val();
  let maybe = (well+thisName+here);
  fetch(maybe)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try to check the spelling, or try another breed.'));
    console.log(maybe);
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`
  );
  
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