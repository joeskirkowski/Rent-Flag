import React, { useState } from 'react';
import './App.css';
import {Form, Row, Col, Button, FormControl, InputGroup, Nav, Navbar, Container, Card, ListGroup, NavDropdown, Offcanvas} from 'react-bootstrap/'
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {Formik, useFormik} from 'formik'


const Score = () => {

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
    <Form htmlFor="Score">
      <Form.Group as={Row}>
        <Col xs="9">
          <RangeSlider
          value={formik.values.Score}
          onChange={e => setValue(e.target.value)}
          onChange={formik.handleChange}
          aria-label="Score"
          id="Score"
          name="Score"
          />
        </Col>
      </Form.Group>
    </Form>
  );
}


export default Score;
