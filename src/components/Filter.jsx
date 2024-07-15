
import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({ onFilterChange, title, rating }) => {
  return (
    <div className="mb-4">
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Filter by title"
          value={title}
          onChange={(e) => onFilterChange('title', e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Filter by rating"
          value={rating}
          onChange={(e) => onFilterChange('rating', e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default Filter;
