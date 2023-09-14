import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_API } from "../utils/constant";
import VideoCard, {AdvideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEO_API);
    const json = await data.json();
    console.log(json,"....................");
    setVideos(json.items);
    // SetFilteredVideos(json.items);
  };

  return (
    <div className="v-container">
     {videos[0] && <AdvideoCard info={videos[0]}/>} 
      { videos.map((videos) => (
        <Link to={"/watch?v=" + videos.id} key={videos.id}  className="v-box">
           <VideoCard info={videos} />
        </Link>
      ))
     
      };
    </div>
  );
};

export default VideoConatiner;
