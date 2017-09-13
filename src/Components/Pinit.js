import React from "react";
// import { PinItButton, PinterestFollowButton, PinterestPinWidget, PinterestBoardWidget, PinterestProfileWidget, PinterestGrid, PinterestPinWidget } from "react-pinterest";
import {Container, Row} from "reactstrap";
import {PinItButton,
    PinterestFollowButton,
    PinterestPinWidget,
    PinterestBoardWidget,
    PinterestProfileWidget,
    PinterestGrid} from "react-pinterest";    
const size = location.search ? location.search.split('=')[1] : 'small';
const sizeMap = { small: 237, medium: 345, large: 600 };
const gutter = 10;
const width = Math.floor(1400 / (sizeMap[size] + gutter)) * (sizeMap[size] + gutter);
const gridStyle = { width: width + 'px' };
export default class pinIt extends React.Component {
  render() {
    return (
        <div className="pinterest-app">
            <div className="album text-muted">

            <Row>
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="567735096748540707" />
            </div>
            <div className="col-md-4">   
                <PinterestPinWidget size={size} pin="193795590184950367" />
            </div>
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="487233253427671247" />
            </div>
            </Row>
                </div>
            </div>
    
    );
  }
}




      // <div className="pinterest-app">
      //   <div className="pinIt">
      //       <div className="album-text-muted">
      //           <div className="container">



