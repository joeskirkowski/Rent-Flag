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
import RangeSlider from 'react-bootstrap-range-slider';


function NewForm () {


  const [ value, setValue ] = React.useState(25);
  const formik = useFormik({
    initialValues: {
      Username: '',
      Address: '',
      Postcode: '',
      Details: '',
      Date:'',
      Score: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
        <Card style={{ width: '40rem', margin: '2rem'}} className="Home bg-dark">
        <p> We reccomend checking out our<a href="FAQ"> FAQ</a> page before making a submission. If you have any further questions please don't hesitate to <a href="Contact">contact us</a>. </p>
        </Card>
    <Form onSubmit={formik.handleSubmit} className="submit-form">
      <Form.Group className="mb-3">
        <InputGroup className="mb-3">
        <InputGroup.Text id="Username" name="username" type="text" onChange={formik.handleChange}value={formik.values.Username}>Username</InputGroup.Text>
        <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        id="Username"
        name="Username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Username}
        />
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text id="Address" name="Address" type="text" onChange={formik.handleChange}value={formik.values.Username}>Address</InputGroup.Text>
        <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        Placeholder="Please enter the house/flat number and street name..."
        id="Address"
        name="Address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Address}
        />
        </InputGroup>
        <InputGroup className="mb-3">
        <InputGroup.Text id="Address" name="Postcode" type="text" onChange={formik.handleChange} value={formik.values.Address}>Postcode</InputGroup.Text>
        <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        Placeholder="Please enter the postcode..."
        id="Postcode"
        name="Postcode"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Postcode}
        />
        </InputGroup>
      </Form.Group>
      <InputGroup>
      <InputGroup.Text>Details</InputGroup.Text>
      <FormControl
      as="textarea"
      aria-label="Details"
      placeholder="Tell us about your issue..."
      id="Details"
      name="Details"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.Details}
      />
      </InputGroup>

      <div className="DatePicker">

        <BootstrapDatePickerComponent />

      </div>
      <Form.Label>How would you rank your overall experience in this property?</Form.Label>
      <div className="Score">
      <Form.Group as={Row}>
        <Col xs="9">
          <RangeSlider
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Col>
        <Col xs="3">
          <Form.Control
          aria-label="Default"
          value={value}
          id="Score"
          name="Details"
          type="number"
          onChange={formik.handleChange}/>
        </Col>

      </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
  }

export default NewForm;
