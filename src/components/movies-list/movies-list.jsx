import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './movies-list.scss';

const mapStateToProps = (state) => {
  const {visibilityFilter} = state;
  return {visibilityFilter};
};

function MoviesList (props) {
  
  const {
    movies,
    visibilityFilter
  } = props;

  let filteredMovies = movies;

  if(visibilityFilter !== ''){
    filteredMovies = movies.filter(
      m => m.Title.toLocaleLowerCase().includes(visibilityFilter)
    );
  }

  if(!movies) return <div className='main-view'/>;

  return (
    <div className="movies-list">
      <VisibilityFilterInput
        visibilityFilter={visibilityFilter}
      />
      <Container>
        <Row>
          {
            filteredMovies.map(
              (movie) => 
              <Col 
                md={4} 
                key={movie._id}
                className="my-4"
              >
                <MovieCard 
                  movie={movie}
                />
              </Col>
            )
          }
        </Row>

      </Container>
    </div>
  )

}

export default connect(
  mapStateToProps,
  null
)(MoviesList);