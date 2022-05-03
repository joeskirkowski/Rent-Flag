import React from 'react'
import {Form, Row, Col, Button, FormControl, InputGroup, Nav, Navbar, Container, Card, ListGroup, NavDropdown, Offcanvas, Text} from 'react-bootstrap/'




export const ColumnFilter = ({column}) => {  /* Intended to be the SearchBar that was able to search by each columns, couldn't get it to render*/
  const { filterValue, setFilter} = column
  return (
      <Col xs="12">
    <span className="Search">
         {' '}
        <input value= {filterValue || ''}
        onChange = {e => setFilter(e.target.value)}
        className="form-control my-0 py-1"
        type="text"
        placeholder="Enter a PostCode..."
        aria-label="Search"
        />
      </span>
      </Col>
  )
}
export default ColumnFilter;
