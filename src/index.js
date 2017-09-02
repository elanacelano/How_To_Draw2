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
            <h1>How To Draw</h1>
            <h2>learn to draw with these easy tutorials!</h2>
          </Jumbotron>
          <Alert color="info">
            <strong>It's EASY!</strong> Let's get started!
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
