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
import Menu from './menu'
import FilteringTable from './Archive'
import AboutPage from './AboutPage'
import FAQPage from './FAQPage'



function App() {

  return (
    <section className="main-container">
    <div className="App" >
      <header>
          <Menu/>
          <Routes>
          <Route index element = {<Home/>}/>
          <Route path= "Contact" element={<Contact/>}/>
          <Route path= "Home" element={<Home />}/>
          <Route path= "Archive" element={<Archive/>}/>
          <Route path= "About" element={<About/>}/>
          <Route path= "Submit" element={<Submit/>}/>
          <Route path= "FAQ" element={<FAQ/>}/>
        </Routes>
      </header>
    </div>
    </section>
  );
}

function navbar () {
  <Menu/>
}

function Home () {
  return (
    <Card style={{ width: '38rem'}} className="Home bg-dark">
      <Card.Body>
        <Card.Title> <h1>Rent Flag</h1></Card.Title>
        <Card.Text>
          Rent Flag is the app by renters for renters.
        </Card.Text>
        <Card.Text>
          We hold landlords to account by giving tennants a place to review them and their properties. More info available <a href="About"> here</a>.
        </Card.Text>
        <Card.Text>
          Looking at a property and want to check it against our Archive?, or want to submit a review of your own? follow the links below:
        </Card.Text>
        <div>
        <Button className="Buttons" variant="danger" href="Archive" size="lg">Archive</Button>
        <Button className="Buttons" variant="danger" href="Submit" size="lg">Submit</Button>
        </div>
      </Card.Body>
    </Card>

  );
}


function Search () {
  return (
    <div>
    <p> enter an address </p>
    <input className= "Search" type="text" />
    <button> search </button>
    </div>
)
}

function Contact () {
return (
<Card style={{ width: '38rem'}} className="Home bg-dark">
    <Card.Body>
      <Card.Title><h3>Contact us</h3></Card.Title>
      <Card.Text>
        tel: +44 987654321
      </Card.Text>
      <Card.Text>
        email: rent@flag.RF
      </Card.Text>
      <Card.Text>
        Address:
        123 Counting street,
        Townsville,
        AB1 1CD
      </Card.Text>
    </Card.Body>
  </Card>
)
}

function SubmitPage () {
  return (
    <div className="Submit-page">
    <Submit/>
    </div>
  )
}

function About () {
  return (
<AboutPage/>
  )
}

function Archive () {
  return (
    <FilteringTable/>
  )
}

function FAQ () {
  return (
    <FAQPage/>
  )
}
export default App;
