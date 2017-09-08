import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.css";
import Header from "./components/headerComponents/header.js";
import DrawingVideos from "./DrawingVideos.js";
import Drawings from "./Drawings";
// import Links from "./Links";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, Component } from "reactstrap";

import "./Assets/css/default.min.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Jumbotron fluid> 
        <Container fluid>
            <h1>How To Draw</h1>
          </Container>
          </Jumbotron>
            <Header/>
          <DrawingVideos/>
        <Drawings/>  
      </div> 
    )
  }
};

module.exports = App.js;