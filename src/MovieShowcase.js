import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import ReactDOM from 'react-dom'
export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(movie =>

       <MovieCard title={movie.title} poster={movie.poster} IMDBRating={movie.IMDBRating} genres={movie.genres} />


    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
