"use strict";

window.addEventListener("load", initialize);

const pokemon = [];

function initialize() {
    getDataFromApi();
    
}

function getDataFromApi(){
    fetch("https://refactored-robot-88a663ea.pages.github.io/api/pokemon.json")
    .then(function(response) { return response.json();  })
    .then(function(arr) { 
        pokemon = arr; 
    })
    .catch(err => console.log(err));
}