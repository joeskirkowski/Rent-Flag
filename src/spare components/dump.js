return (
  <Form onSubmit={formik.handleSubmit} className="submit-form">
    <Form.Group className="mb-3">
      <Form.Text>
      <p>We'll never share your details with anyone else.</p>
      </Form.Text>
      <InputGroup className="mb-3">
      <InputGroup.Text id="Username" name="username" type="text" onChange={formik.handleChange}value={formik.values.Username}>Username</InputGroup.Text>
      <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      />
      </InputGroup>
      <InputGroup className="mb-3">
      <InputGroup.Text id="Username" name="username" type="text" onChange={formik.handleChange}value={formik.values.Username}>Address</InputGroup.Text>
      <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      Placeholder="Please enter the house/flat number and street name..."
      />
      </InputGroup>
      <InputGroup className="mb-3">
      <InputGroup.Text id="Address" name="Address" type="text" onChange={formik.handleChange} value={formik.values.Address}>Postcode</InputGroup.Text>
      <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      Placeholder="Please enter the postcode..."
      />
      </InputGroup>
    </Form.Group>
    <InputGroup>
    <InputGroup.Text>Details</InputGroup.Text>
    <FormControl as="textarea" aria-label="Details" placeholder="Tell us about your issue..." />
    </InputGroup>
    <div className="DatePicker">
      <BootstrapDatePickerComponent />
    </div>
    <Form.Label>How would you rank your overall experience in this property?</Form.Label>
    <div className="Score">
      <RangeSlider />
    </div>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)
}
export default Submit;
