import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";

const VideoCard = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card
      className="relative   overflow-hidden rounded-xl shadow-lg max-w-md aspect-[404/365]"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-auto"
        onClick={handlePlayPause}
      />
      {(!isPlaying || showControls) && (
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
            {isPlaying ? (
              <Pause size={32} color="black" />
            ) : (
              <Play size={32} color="black" />
            )}
          </div>
        </button>
      )}
    </Card>
  );
};

export default VideoCard;
