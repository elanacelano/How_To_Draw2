import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import Links from "./Links";
  
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, Video } from "reactstrap";


export default class drawingVideos extends React.Component {
  render() {
    return (
        <div className="video">
            <div>
            <iframe width="640" 
                height="420" 
                src="https://www.youtube.com/watch?v=UADEFQ4EjIA&t=21s">
              </iframe>
            </div>
          <div className="video2">
            <iframe width="640" 
                height="420" 
                src="https://www.youtube.com/watch?v=JWHztcZHmfc&t=76s">
              </iframe>
            </div>
        <div className="video3">
            <iframe width="640" 
                height="420" 
                src="https://www.youtube.com/watch?v=7awz4iVRgFo">
              </iframe>
            </div>
          <div className="video4">
            <iframe width="640" 
                height="420" 
                src="https://www.youtube.com/watch?v=UADEFQ4EjIA&t=21s">
              </iframe>
            </div>
          </div>

          );
        }
      }


