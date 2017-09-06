import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import DrawingVideos from "./DrawingVideos";
import Links from "./Links";
import homepg from "./homepg";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';


export default class Example extends React.Component {
  render() {
    return (
        <div class='video'>
            <Video from='youtube' videoId={"vBySO76EPSM"} />
          </div>
          );
        }
      }
<video tabindex="-1" 
  class="video-stream html5-main-video" 
    controlslist="nodownload" 
        style="width: 426px; height: 240px; left: 0px; top: 0px; opacity: 1;" 
            src="blob:https://www.youtube.com/bcff906d-7dae-4179-add1-97fcf86cbe86"></video>