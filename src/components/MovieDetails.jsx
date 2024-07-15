
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === title);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <Container>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="embed-responsive embed-responsive-16by9 mb-3">
        <iframe
          className="embed-responsive-item"
          src={movie.trailerURL}
          allowFullScreen
          title={movie.title}
          style={{ width: '100%', height: '600px'}}
        />
      </div>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default MovieDetails;
