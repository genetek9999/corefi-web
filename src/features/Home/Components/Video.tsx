import { AdvancedVideo } from "@cloudinary/react";
import { CloudinaryVideo } from "@cloudinary/url-gen";
import React from "react";

interface VideoPlayerProps {
  publicId: string;
  border: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ publicId, border }) => {
  const vid = new CloudinaryVideo(publicId, { cloudName: "dh77oochw" });

  return <AdvancedVideo style={border ? { borderRadius: "24px" } : {}} cldVid={vid} autoPlay muted loop />;
};

export default VideoPlayer;
