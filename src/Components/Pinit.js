import React from "react";
// import { PinItButton, PinterestFollowButton, PinterestPinWidget, PinterestBoardWidget, PinterestProfileWidget, PinterestGrid, PinterestPinWidget } from "react-pinterest";
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
                 
                <PinterestPinWidget size={size} pin="530158187357124374" />
                <PinterestPinWidget size={size} pin="356417757989339525" />
                <PinterestPinWidget size={size} pin="356417757986524080" />
                <PinterestPinWidget size={size} pin="356417757986724718" />
                <PinterestPinWidget size={size} pin="356417757988564358" />
                <PinterestPinWidget size={size} pin="356417757988206582" />
                <PinterestPinWidget size={size} pin="202802789445693269" />
                <PinterestPinWidget size={size} pin="89438742571585339" />
                <PinterestPinWidget size={size} pin="232850243203755319" />
                <PinterestPinWidget size={size} pin="137008013639035297" />
                <PinterestPinWidget size={size} pin="264797653065817757" />
                <PinterestPinWidget size={size} pin="144467100519920447" />
            </div>
        );
      }
    }








