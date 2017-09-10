import React from "react";
import helpers from "../utils/helpers";
import StackGrid from "react-stack-grid";
import sizeMe from "react-sizeme";
import { PinterestPinWidget } from "react-pinterest";
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
      		<div style="position: relative; transition: height 480ms ease-out; height: 1412px;">
      		<span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(14px) translateY(0px);"><div style="transition: background 200ms ease-out; background: rgb(201, 202, 227); height: 438px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(139px) translateY(0px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 281px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(0px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 185px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(0px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 107px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(112px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 104px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(190px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 294px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(221px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 140px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(139px) translateY(286px);"><div style="transition: background 200ms ease-out; background: rgb(201, 202, 227); height: 300px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(366px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 184px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(14px) translateY(443px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 97px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(489px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 89px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(14px) translateY(545px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 204px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(555px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 159px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(583px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 198px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(139px) translateY(591px);"><div style="transition: background 200ms ease-out; background: rgb(201, 202, 227); height: 165px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(719px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 80px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(14px) translateY(754px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 232px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(139px) translateY(761px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 230px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(786px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 179px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(804px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 153px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(962px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 199px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(970px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 160px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(14px) translateY(991px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 190px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(139px) translateY(996px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 228px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(1135px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 130px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(389px) translateY(1166px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 179px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(14px) translateY(1186px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 109px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(139px) translateY(1229px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 174px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(264px) translateY(1270px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 142px;"></div></span><span style="z-index: 2; opacity: 1; display: block; position: absolute; top: 0px; left: 0px; width: 120px; transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1); transform: translateX(14px) translateY(1300px);"><div style="transition: background 200ms ease-out; background: rgb(223, 224, 223); height: 110px;"></div></span><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; left: -9px; top: -7px; right: -8px; bottom: -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 550px; height: 1435px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div>
     	    <script
			    type="text/javascript"
			    async defer
			    // <src="http://www.pinterest.com/"
			    src="//assets.pinterest.com/js/pinit.js">
				<a href="https://www.pinterest.com/pin/567735096748540707/"data-pin-do="embedPin"width="100%"></a>
    				<img src="https://www.pinterest.com/pin/567735096748540707/"data-pin-do="embedPin"width="100%"></img>
    		
        		<div key="4922014937288551472"><img src="https://www.pinterest.com/pin/567735096748540707/"></img></div>
        			
        		</script>
    		</StackGrid>
    		<p>PICTURES</p>
    		

    		
		</div>
        );
      }
    }








