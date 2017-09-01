import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Form from "./Form";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

class App extends React.Component {
  render() {
    const name = "Peter";
    const age = 30;
    return (
      <div className="App">
       <Container>
          <Jumbotron>
            <h3>I am Jumbotron! Hear me roar!!</h3>
          </Jumbotron>
          <Alert color="info">
            <strong>Well done!</strong> You successfully read this important alert message.
            </Alert>
            <Child/>
            <Form/>
       </Container>
      </div>
    )
  }
}

class Child extends React.Component {
  render(){
    return (
      <div className="children">
      <Card>
        <CardBlock>
          <CardTitle>I am a child</CardTitle>
          <CardSubtitle>my parent is the <code>App Component</code></CardSubtitle>
        </CardBlock>
      </Card>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
