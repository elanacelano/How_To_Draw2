import React from "react";
import helpers from "../utils/helpers";
import StackGrid from "react-stack-grid";
import sizeMe from "react-sizeme";
// import { pinWidth, pinHeight } from "react-sizeme";
 
export default class Pinit extends React.Component {
	componentDidMount(){
		helpers.getPinterestFiles().then(function(response){
			console.log(response);
		});
	}

  render() {
  	// const { pinWidth, pinHeight } = this.props.size;

    return (
    	    <div className="pinit">
      		<StackGrid columnWidth={150}>
     	    <script
			    type="text/javascript"
			    async defer
			    src="//assets.pinterest.com/js/pinit.js">
				<a href="https://www.pinterest.com/pin/567735096748540707/"data-pin-do="embedPin" width="100%"></a>




    		
        		<div key="4922014937288551472"><img src="https://www.pinterest.com/pin/567735096748540707/"></img></div>
        			<span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 150px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(186.5px) translateY(87px);"><div class="item item--pattern2" style="height: 217px;"></div></span>

        		<div key="4922014937288551472"><img src="https://www.pinterest.com/pin/487233253428680844/"></img></div>
        		<div key="4922014937288551472"><img src="https://www.pinterest.com/pin/193795590184950367/"></img></div>        		        		
        		
    		</StackGrid>
    		<p>PICTURES</p>
    		
			  
				<a href="https://www.pinterest.com/pin/567735096748540707/"data-pin-do="embedPin"width="100%"height="auto"key="4922014937288551472"></a>
    		
        		<div key="4922014937288551472"><img src="https://www.pinterest.com/pin/193795590184950367/data-pin-do="embedPin""></img>
        			
        		<div key="4922014937288551472"><img src="https://www.pinterest.com/pin/487233253428680844/"></img>
        		<div key="4922014937288551472"><img src="https://www.pinterest.com/pin/193795590184950367/"></img>   
        	</StackGrid>
    		<p>PICTURES</p>

		</div>
        );
      }
    }








