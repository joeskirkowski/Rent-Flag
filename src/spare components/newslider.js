<InputGroup>
    <Form.Label>
<p>How would you rate your overall experience in the property?</p>
</Form.Label>
<Col xs="12">
    <RangeSlider
    className="RangeSlider"
     variant='danger'
    value={formik.values.Score}
    onChange={e => setValue(e.target.value)}
    onChange={formik.handleChange}
    aria-label="Score"
    id="Score"
    name="Score"
    />
    </Col>
    </InputGroup>
    <Button variant="danger" type="submit">
      Submit
    </Button>
  </Form>
  </div>
)
}
