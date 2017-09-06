import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import Links from "./Links";
  
import { Alert, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, Video } from "reactstrap";


export default class drawingVideos extends React.Component {
  render() {
    return (
        <div className="video">
            <iframe width="640" 
                height="420" 
                src="https://www.youtube.com/watch?v=UADEFQ4EjIA&t=21s">
              </iframe>
            </div>
          // <div className="video2">
          //   <iframe width="640" 
          //       height="420" 
          //       src="https://www.youtube.com/watch?v=UADEFQ4EjIA&t=21s">
          //     </iframe>
          //   </div>
          

          // hair
// https://www.youtube.com/watch?v=7awz4iVRgFo
          // hands
// https://www.youtube.com/watch?v=JWHztcZHmfc&t=76s
          // eyes
// https://www.youtube.com/watch?v=UADEFQ4EjIA&t=21s          


// eyes


          );
        }
      }
    // pinterest DaVinci's Hands
// <img alt="Today's drawing class: Drawing Techniques by The Old Masters | Da Vinci - hand study | Artists, who are most successful in silverpoint drawing are those with a deep concern for beauty of surface. So an artist such as Leonardo, is much more successful in silverpoint than an artist such as Michelangelo who is relatively heavy-handed in his drawing." class="_mj _25 _3x _2h" src="https://i.pinimg.com/564x/e8/0c/41/e80c410f96d4d50447653cf456a612fa.jpg">




// chrome.webRequest.onHeadersReceived.addListener(
//     function(info) {
//         var headers = info.responseHeaders;
//         for (var i=headers.length-1; i>=0; --i) {
//             var header = headers[i].name.toLowerCase();
//             if (header == 'x-frame-options' || header == 'frame-options') {
//                 headers.splice(i, 1); // Remove header
//             }
//         }
//         return {responseHeaders: headers};
//     },
//     {
//         urls: [ '*://*/*' ], // Pattern to match all http(s) pages
//         types: [ 'sub_frame' ]
//     },
//     ['blocking', 'responseHeaders']
// );
