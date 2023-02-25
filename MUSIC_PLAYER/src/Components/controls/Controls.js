import React, { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseIcon from "@mui/icons-material/Pause";
import "./Controls.css";

const Controls = ({ currentSongIndex, setCurrentSongIndex, songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioEl = useRef(null);
  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  const playNextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1 > songs.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };
  const playPrevSong = () => {
    setCurrentSongIndex((prev) => prev - 1 < 0 ? 0 : prev  - 1);
    setIsPlaying(true);
  };
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying, currentSongIndex]);
  return (
    <div className="controls">
      <audio src={songs[currentSongIndex].src} ref={audioEl} />
      <FastRewindIcon
        className="icon"
        sx={{ fontSize: "35px" }}
        onClick={playPrevSong}
      />
      {!isPlaying ? (
        <PlayArrowIcon
          className="icon"
          sx={{ fontSize: "76px" }}
          onClick={handlePlay}
        />
      ) : (
        <PauseIcon
          className="icon"
          sx={{ fontSize: "76px" }}
          onClick={handlePlay}
        />
      )}

      <FastForwardIcon
        className="icon"
        sx={{ fontSize: "35px" }}
        onClick={playNextSong}
      />
    </div>
  );
};

export default Controls;
