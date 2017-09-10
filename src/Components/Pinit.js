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
        			
        		</script>
    		</StackGrid>
    		<p>PICTURES</p>
    		

    		
		</div>
        );
      }
    }








