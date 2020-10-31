import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom'
const Example = (props) => {
  console.log(props)
  return (
    <>

      <Form style={{ width: '50%', margin: '0 auto' }}>
        <div className='h2 text-uppercase'>Login</div>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password</Label>
          <Input
            type="password"
            name="password"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <Button color="primary" onClick={e => {
          e.preventDefault();
          props.history.push('/')
        }}>Sign in</Button>
        {/* <Button>Sign in</Button> */}
      </Form>
    </>
  );
}

export default withRouter(Example);