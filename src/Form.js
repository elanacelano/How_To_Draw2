import React from 'react';
import helpers from "./utils/helpers";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Forms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form:{
        email:"",
        password:""
      }
    }
     this.changeForm = this.changeForm.bind(this);
     this.submitForm = this.submitForm.bind(this);
  }
  changeForm(event) {
    const field = event.target.name;
    const form = this.state.form;
    form[field] = event.target.value;
     this.setState({form});
  }
  submitForm(event){
    event.preventDefault();
    helpers.createUser(this.state.form)
    .then((data)=>{
      console.log("Success!!!!");
    })
  }
  render() {
    return (
      <div className="Form">
        <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.changeForm} />
          </Col>
           <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="with a placeholder" onChange={this.changeForm}/>
          </Col>
        </FormGroup>
        <Button color="primary" onClick={this.submitForm}>Submit</Button>{' '}
        </Form>
      </div>
    )
  }
}


export default Forms;