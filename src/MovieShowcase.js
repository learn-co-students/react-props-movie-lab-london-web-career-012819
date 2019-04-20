import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 

      // return  {title: obj.title, IMDBRating: obj.IMDBRating, genres: obj.genres, poster: obj.poster}
    
    return movieData.map(obj => < MovieCard title={obj.title} IMDBRating={obj.IMDBRating} genres={obj.genres} poster={obj.poster}  /> )
    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


// {
//   title: 'The Trash Man',
//   IMDBRating: 5,
//   genres: ['crime', 'period piece'],
//   poster: 'the-trash-man'
// },

// map(array, callback){
//   let returnArray = []
//   for(let i=0; i< array.length; i++){
//     returnArray.push(callback(array[i]))
//   }

//   return returnArray
// }
