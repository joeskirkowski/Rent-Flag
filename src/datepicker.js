import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)  /* Unsuccessfully attempted to edit the code here to get the datepicker to link up with the rest of the form*/
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
          <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="Date"
              dateFormat="MM/yyyy"  /* preferred format for the date*/
          />
        </div>
      </form>
    );
  }

}
export default App;
