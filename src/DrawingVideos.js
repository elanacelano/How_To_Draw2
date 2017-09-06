<link rel="stylesheet" href="/path/react-video.css" />

     /** @jsx React.DOM */
      var Video = require('react-video');

      React.render(
        <Video from='youtube' videoId={videoId} />,
        document.querySelector('#your-div')
      );

      React.render(
        <Video from='vimeo' videoId={videoId} />,
        document.querySelector('#your-div')
      );
      React.render(
        <Video videoId={videoId} />,
        document.querySelector('#your-div')
      );
     var _onError = function(err) {
          console.log(err);
        };

        React.render(
          <Video onError={_onError} videoId={videoId} />
          document.querySelector('#your-div')
        );
      

      /** @jsx React.DOM */

      var Video = ReactVideo;
    