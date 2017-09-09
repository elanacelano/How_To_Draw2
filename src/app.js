import React from "react";
import DrawingVideos from "./Components/DrawingVideos.js";
import Drawings from "./Components/Drawings";
import Pinterests from "./Components/Pinit"
import Navigation from './Components/Navigation.js'
import {Jumbotron, Container} from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Navigation/>
      <Jumbotron fluid> 
         fdsaf
      </Jumbotron>
      <DrawingVideos/>
      <Pinterests/>
        </Container>
      </div> 
    )
  }
};

export default App;