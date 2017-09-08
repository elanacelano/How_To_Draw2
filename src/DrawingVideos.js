import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

// import Links from "./Links";
  
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, Video } from "reactstrap";


export default class drawingVideos extends React.Component {
  render() {
    return (

        <div className="videos">
        <div className="album text-muted">
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <iframe width="100%" height="auto" src="https://www.youtube.com/embed/UADEFQ4EjIA"></iframe>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <iframe width="100%" height="auto" src="https://www.youtube.com/embed/JWHztcZHmfc"></iframe>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <iframe width="100%" height="auto" src="https://www.youtube.com/embed/7awz4iVRgFo"></iframe>
              <p>Drawing</p>
            </div>
          </div>
 
          <div className="row">
            <div className="col-md-4">
              <iframe width="100%" height="auto" src="https://www.youtube.com/embed/aLDAbUxkZj4"></iframe>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <iframe width="100%" height="auto" src="https://www.youtube.com/embed/ZP8goZl9JH0"></iframe>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <iframe width="100%" height="auto" src="https://www.youtube.com/embed/1OAWvq4L2cY"></iframe>
              <p>Drawing</p>
            </div>
          </div>

          </div>
        </div>
      </div>  
    );
  }
}



