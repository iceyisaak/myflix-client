import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import {setFilter} from '../../actions/actions';

import './visibility-filter-input.scss';

function VisibilityFilterInput(props){
  return (
    <Form>
      <Form.Row className="justify-content-center align-items-center">
        <Col xs="5">
          <Form.Control
            onChange={(e)=>props.setFilter(e.target.value)}
            value={props.visibilityFilter}
            placeholder="Search by Movie Name"
            className=""
          />
        </Col>
        <Col xs="auto">
          <Button
            variant="primary"  
          >
            Search
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default connect(
  null,
  {setFilter}
)(VisibilityFilterInput);