import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



import React from 'react'

function Forms({ handleSubmit, setValue }) {
  
  return (
      <div>
      <Form onSubmit={handleSubmit} >
      <Form.Select aria-label="Default select example" onChange={(e)=>setValue(e.target.value)}>
      <option>Open this select menu</option>
      <option value="smartphones">Smart Phones</option>
      <option value="laptops">Laptops</option>
      <option value="groceries">Groceries</option>
    </Form.Select>
          <Button variant="primary" type="submit">
        Submit
      </Button>
          </Form>
    </div>
  )
}

export default Forms