
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card className="m-3" style={{ width: '100%', height: '600px'}}>
      <Link to={`/movie/${movie.title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>Rating: {movie.rating}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default MovieCard;
