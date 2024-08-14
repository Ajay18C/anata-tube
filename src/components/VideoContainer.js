import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (!videos) return null;
  return (
    <div className="flex flex-wrap ">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {" "}
          <VideoCard info={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
