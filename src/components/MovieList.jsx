
import React from 'react';
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
