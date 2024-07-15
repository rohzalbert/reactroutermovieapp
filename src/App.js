
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { Button, Modal, Form } from 'react-bootstrap';
import MovieDetails from './components/MovieDetails';

const initialMovies = [
  {
    title: "Inception",
    description: "A mind-bending thriller",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    rating: 5,
    trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    title: "Interstellar",
    description: "A space exploration epic",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: 4,
    trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    title: "The Dark Knight",
    description: "A superhero action film",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 5,
    trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    title: "Power",
    description: "An American crime drama-thriller",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTg0NDMyMzEzOF5BMl5BanBnXkFtZTgwNTIzODQxMjI@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    trailerURL: "https://www.youtube.com/embed/WXTNngJsBrI?si=Xmnaj_pqMp3KdDXG"
  },

];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [filter, setFilter] = useState({ title: '', rating: '' });
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerURL: ""
  });

  const handleFilterChange = (field, value) => {
    const newFilter = { ...filter, [field]: value };
    setFilter(newFilter);
    filterMovies(newFilter);
  };

  const filterMovies = (filter) => {
    let filtered = movies;
    if (filter.title) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    }
    if (filter.rating) {
      filtered = filtered.filter(movie => movie.rating === parseInt(filter.rating));
    }
    setFilteredMovies(filtered);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
    setShow(false);
  };

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Router>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0">Movie App</h1>
          <Button variant="primary" onClick={handleShow}>
            Add Movie
          </Button>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilterChange={handleFilterChange} title={filter.title} rating={filter.rating} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Poster URL</Form.Label>
                <Form.Control type="text" name="posterURL" onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" name="rating" onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Trailer URL</Form.Label>
                <Form.Control type="text" name="trailerURL" onChange={handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Router>
  );
};

export default App;