import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Form from "./Form";
import Login from './Login';
import Links from "./Links";
import home from "./homepg";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Jumbotron fluid> 
        <Container fluid>
            <h1>How To Draw</h1>
            <h2>learn to draw with these easy tutorials!</h2>
          </Container>
          </Jumbotron>
          <Alert color="info">
            <strong>It's EASY!</strong> Let's get started!
            </Alert>
            <Child/>
            <Form/>
            <Login/>
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
