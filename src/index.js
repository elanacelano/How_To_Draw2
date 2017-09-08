import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
// import Header from "./components/header.js";
import DrawingVideos from "./DrawingVideos.js";
import Drawings from "./components/Search/Drawings";
// import Inspiration from "./Inspiration";
// import Links from "./Links";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, Component } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">

      <h1 className="logo">
        How to Draw
      </h1>

<div className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand">Album</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
    <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand">Album</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <a href="#" className="navbar-brand">Album</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-toggler-icon"></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        


      <Jumbotron fluid> 
        <Container fluid>
          <h2></h2>
          </Container>
          </Jumbotron>
          
          <DrawingVideos/> 
        <Drawings/> 
      </div> 
    )
  }
};

// class Child extends React.Component {
//   render(){
//     return (
//       <div className="children">
//       <Card>
//         <CardBlock>
//           <CardTitle>Sign in now</CardTitle>
//         </CardBlock>
//       </Card>
//       </div>
//     )
//   }
// }


ReactDOM.render(<App />, document.getElementById("root"));
