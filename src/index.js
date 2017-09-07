import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import DrawingVideos from "./DrawingVideos.js";
import Drawings from "./components/Search/Drawings";
import Links from "./Links";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, Component } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Jumbotron fluid> 
        <Container fluid>
            <h1>How To Draw</h1>
          </Container>
          </Jumbotron>
          
          <DrawingVideos/> 
        <Drawings/> 
      </div> 
    )
  }
};

class Child extends React.Component {
  render(){
    return (
      <div className="children">
      <Card>
        <CardBlock>
          <CardTitle>Sign in now</CardTitle>
        </CardBlock>
      </Card>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
