import React from "react";
import './MovieDetails.css'
import moment from "moment";


const MovieDetails = ({ movie, selectMovie }) => {
  movie = movie.movie;
  const formattedRelease = moment(movie.release_date).format('l');
  const formattedGenres = () => {
    let genreDisplay = [];
    for (let i = 0; i < movie.genres.length; i++) {
      if (i < movie.genres.length - 1) {
        genreDisplay.push(`${movie.genres[i]}, `)
      } else {
        genreDisplay.push(movie.genres[i])
      }
    }
    return genreDisplay;
  };
  const budgetRevenueDisplay = (type) => {
    let displayNum = movie[type];
    if (displayNum === 0) {
      return `Not available`;
    } else {
      return `$${displayNum.toLocaleString("en-US")}`;
    }
  }

  return (
    <section className="single-movie-display">
      <section className="single-movie-header">
        <button onClick = {event => selectMovie(event.target.id)} className="go-back-all-movies">GO BACK</button>
      </section>
      <section className="poster-details-section">
        <img src={movie.poster_path} className="single-movie-poster" alt={`A movie poster for ${movie.title}`} />
        <article className="single-movie-details-section">
          <div className="single-movie-title-tag">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-tagline">{`"${movie.tagline}"`}</p>
          </div>
          <p className="movie-overview">{movie.overview}</p>
          <div className="movie-details-divider">
            <h3>Movie Details</h3>
          </div>
          <section className="movie-details-section">
            <p>{`Funk rating: ${movie.average_rating}`}</p>
            <p>{`${movie.runtime} minutes`}</p>
            <p>{formattedGenres()}</p>
          </section>
          <div className="production-details-divider">
            <h3>Production Details</h3>
          </div>
          <section className="production-details-section">
            <p>{`Budget: ${budgetRevenueDisplay('budget')}`}</p>
            <p>{`Revenue: ${budgetRevenueDisplay('revenue')}`}</p>
            <p>{`Release date: ${formattedRelease}`}</p>
          </section>
        </article>
      </section>
    </section>
  )

}


export default MovieDetails;