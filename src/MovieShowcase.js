import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie) => {
      // console.log(movie)
      const title = movie.title
      const IMDBRating = movie.IMDBRating
      const genres = movie.genres
      const poster = movie.poster

      return <MovieCard movie={movie} title={title} IMDBRating={IMDBRating} genres={genres} poster={poster}/>
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
