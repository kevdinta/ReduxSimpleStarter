import React from 'react';
import VideoListItem from './video_list_item';

// we use className instead of class to avoid conflict with the word class like index.js (class App extends ...)
// props.videos <= videos is an attribute in index.js when I call the component VideoList

const VideoList = (props) => {
    // console.log(props);
    // etag => check tab network, it's an id
    const videoItems = props.videos.map((video) => {
     return (
         <VideoListItem
             onVideoSelect={props.onVideoSelect}
             key={video.etag}
             video={video} />
     );
  });

  return (
      <ul className="col-md-4 list-group">
          {videoItems}
      </ul>
  );
};

export default VideoList;