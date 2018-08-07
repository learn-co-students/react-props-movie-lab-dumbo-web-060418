import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movieData) => {
    // map over your movieData array and return the correct
    return movieData.map((movie, index) => {
      //movie.title, movie.IMDBRating, movie.genres, movie.poster
      return(<MovieCard key={index} title={movie.title}
        IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
