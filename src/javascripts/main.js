//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


import { movies } from './movies'

for(let m of movies){
    let m_thumb = document.getElementById('m' + m.id)
    m_thumb.innerHTML = `
        <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    `

    m_thumb.onclick = function(){
        displayMovie(m)
    }
}

let featured_movie = document.querySelector(".featured")
function displayMovie(movie){
    featured_movie.innerHTML = `
    <div class="card">
    <div class="card-header">${movie.title}</div>
    <img src="${movie.poster}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title"><small>${movie.year}, ${movie.genre}</small></h5>
      <p class="card-text">${movie.plot}</p>
    </div>
    <div class="card-footer text-muted"></div>
      <div class="row row-cols-3">
        <div class="col"><strong>Rating: ${movie.rating}</strong></div>
        <div class="col"><strong>Rated: ${movie.rated}</strong></div>
        <div class="col"><strong>Votes: ${movie.votes}</strong></div>
      </div>

    
    </div>
    `
}