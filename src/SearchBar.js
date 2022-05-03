import React from 'react'
import {Form, Row, Col, Button, FormControl, InputGroup, Nav, Navbar, Container, Card, ListGroup, NavDropdown, Offcanvas, Text} from 'react-bootstrap/'




export const GlobalFilter = ({filter, setFilter}) => {  /* Only able to search globally, not by columns*/
  return (
      <Col xs="12"> 
    <span className="Search">
        {' '}
        <input value= {filter || ''}     /* Either a filter or an empty string*/
        onChange = {e => setFilter(e.target.value)}  /* filters by input*/
        className="form-control my-0 py-1"
        type="text"
        placeholder="Enter a PostCode"
        aria-label="Search"
        />
      </span>
      </Col>
  )
}
export default GlobalFilter;
