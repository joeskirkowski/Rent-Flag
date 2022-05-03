import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
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

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
