import React from "react";
import {Container, Row, Video } from "reactstrap";


export default class drawingVideos extends React.Component {
  render() {
    return (


<iframe id="existing-iframe-example"
        width="640" height="360"
        src="https://www.youtube.com/embed/UADEFQ4EjIA"
        frameborder="0"
        style="border: solid 4px #37474F"
></iframe>




          <div className="videos">
            <div className="album text-muted">
          <Row>
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
          </Row>
 
          <Row>
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
          </Row>
          </div>
          </div> 
    );
  }
}



