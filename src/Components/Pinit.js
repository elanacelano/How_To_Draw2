import React from "react";
import helpers from "../utils/helpers";
import StackGrid from "react-stack-grid";
import sizeMe from "react-sizeme";
import { PinterestPinWidget } from "react-pinterest";
// import { pinWidth, pinHeight } from "react-sizeme";
 

// import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, pinterest } from "reactstrap";




export default class pinIt extends React.Component {
	componentDidMount(){
		helpers.getPinterestFiles().then(function(response){
			console.log(response);
		});
	}

  render() {
  	// const { pinWidth, pinHeight } = this.props.size;

    return (

    	 <div className="pinit">
        <div className="album text-muted">
        <div className="container">
        <div key="4922014937288551472"><img src="https://www.pinterest.com/pin/567735096748540707/"></img></div>

          <div className="row">
            <div className="col-md-4">
              <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/193795590184950367/"></a>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/487233253427671247/"></a>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <a data-pin-do="embedPin" href="https://www.pinterest.com/pin/AaXqAFRTYylQQOFuea2pz_iOQaR4URN09TkmozccgYCIR06rM-OGeVc/"></a>
              <p>Drawing</p>
            </div>
          </div>
 
          <div className="row">
            <div className="col-md-4">
              <img width="100%" height="auto" src="https://www.youtube.com/embed/aLDAbUxkZj4"></img>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <img width="100%" height="auto" src="https://www.youtube.com/embed/ZP8goZl9JH0"></img>
              <p>Drawing</p>
            </div>
            <div className="col-md-4">
              <img width="100%" height="auto" src="https://www.youtube.com/embed/1OAWvq4L2cY"></img>
              <p>Drawing</p>
            </div>
          </div>

          </div>
        </div>


    		
		</div>
        );
      }
    }








