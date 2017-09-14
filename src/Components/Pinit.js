import React from "react";
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
                <p>Pablo Picasso</p>
            </div>
            <div className="col-md-4">   
                <PinterestPinWidget size={size} pin="193795590184950367" />
                <p>Vincent Van Gough</p>
            </div> 
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="215891375860202940" />
                <p>Albrecht Durer</p>
            </div>
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="177118197815718623" />
                <p>Gustav Klimpt</p>
            </div>
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="27373510206669218" />
                <p>Kathe Kollowitz</p>
            </div>
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="588986457488139167" />
                <p>MC Escher</p>
            </div>
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="457678380854076785" />
                <p>Vincent Van Gogh</p>
            </div>
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="244601823481707800" />
                <p>Edgar Degas</p>
            </div> 
            <div className="col-md-4">
                <PinterestPinWidget size={size} pin="487233253427671247" />
                <p>Mucha</p>
            </div>
            </Row>
                </div>
            </div>
    
    );
  }
}

