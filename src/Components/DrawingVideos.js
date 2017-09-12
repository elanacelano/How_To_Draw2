import React from "react";
import {Container, Row, Video } from "reactstrap";
import YouTube from "react-youtube";

export default class drawingVideos extends React.Component {
  render() {
    const opts = {
      height: 'auto',
      width: '100%'
    }
    return (
          <div className="videos">
            <div className="album text-muted">
          <Row>
            <div className="col-md-4">
            
              <YouTube
                videoId="UADEFQ4EjIA"
                opts={opts}
                onReady={this._onReady}
                />
              <p> </p>
            </div>
            <div className="col-md-4">
             <YouTube
                videoId="JWHztcZHmfc"
                opts={opts}
                onReady={this._onReady}
                />
              <p> </p>
            </div>
            <div className="col-md-4">
             <YouTube
                videoId="7awz4iVRgFo"
                opts={opts}
                onReady={this._onReady}
                />
              <p> </p>
            </div>
          </Row>
 
          <Row>
            <div className="col-md-4">
              <YouTube
                videoId="aLDAbUxkZj4"
                opts={opts}
                onReady={this._onReady}
                />
              <p> </p>
            </div>
            <div className="col-md-4">
              <YouTube
                videoId="ZP8goZl9JH0"
                opts={opts}
                onReady={this._onReady}
                />
              <p> </p>
            </div>
            <div className="col-md-4">
              <YouTube
                videoId="1OAWvq4L2cY"
                opts={opts}
                onReady={this._onReady}
                />
              <p> </p>
            </div>
          </Row>
          </div>
          </div> 
    );
  }
}



