import React from "react";
import helpers from "../utils/helpers";
import StackGrid from "react-stack-grid";
 
export default class YouTube extends React.Component {
	componentDidMount(){
		helpers.getYouTubeFiles().then(function(response){
			console.log(response);
		});
	}
  render() {
    return (
    	<div className="youtube">
    		<StackGrid columnWidth={150}>
        		<div key="key1">Item 1</div>
        		<div key="key2">Item 2</div>
        		<div key="key3">Item 3</div>
    		</StackGrid>
    		<p>YouTube place holder</p>
		</div>
        );
      }
    }


