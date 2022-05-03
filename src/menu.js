import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import BootstrapDatePickerComponent from './datepicker'
import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {Form, Row, Col, Button, FormControl, InputGroup, Nav, Navbar, Container, Card, ListGroup, NavDropdown, Offcanvas, Text} from 'react-bootstrap/'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import { Formik } from 'formik';
import { useFormik } from 'formik';
import Submit from './submit'


export default function Menu () {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand={false} fixed="top">
      <Container fluid>
        <Navbar.Brand href="Home"><h3>Rent Flag</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton  className="bg-dark">
            <Offcanvas.Title id="offcanvasNavbarLabel"  className="bg-dark"><h3>Menu</h3></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body  className="bg-dark">
            <Nav className="justify-content-end flex-grow-1 pe-3"  className="bg-dark">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="Submit">Submit</Nav.Link>
              <Nav.Link href="Archive">Archive</Nav.Link>
              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown" className="bg-dark"> 
                <NavDropdown.Item href="Contact">Contact</NavDropdown.Item>
                <NavDropdown.Item href="FAQ">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="About">About</NavDropdown.Item>
                <NavDropdown.Divider  className="bg-dark" />
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </div>
  );
}
