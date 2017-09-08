import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.css";
import Header from "./components/headerComponents/header.js";
import DrawingVideos from "./DrawingVideos.js";
import Drawings from "./Drawings";
import Drawings from "./Drawings";
// import Links from "./Links";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, Component } from "reactstrap";

import "./Assets/css/default.min.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand">How to Draw</a>


      <navbar></navbar>

      <Jumbotron fluid> 
        <Container fluid>
          <p></p>
          </Container>
          </Jumbotron>
            <Header/>
          <DrawingVideos/>
        <Drawings/>  
      </div> 
      </div> 
    )
  }
};

module.exports = App.js;