import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Form from "./Form";
import Login from './Login';
import Links from "./Links";
import homepg from "./homepg";
import DrawingVideos from "./DrawingVideos";
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';


export default class Example extends React.Component {
  render() {
    return (
        <div class='video'>
            <div class='video-loading'>
              <svg>...</svg>
            </div>
            <div class='video-image'>
              <button type='button' class='video-play-button'>
                <svg>...</svg>
              </button>
            </div>
            <div class='video-embed'>
              <iframe>...</iframe>
            </div>
          </div>
          );
        }
      }