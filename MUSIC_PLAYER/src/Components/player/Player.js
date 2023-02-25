import React, { useState } from "react";
import Controls from "../controls/Controls";
import SongInfo from "../songinfo/SongInfo";
import "./Player.css";
import { songs } from "../../Data/Data";

const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  return (
    <div className="music-player">
      <SongInfo currentSong={songs[currentSongIndex]} />
      <Controls
        setCurrentSongIndex={setCurrentSongIndex}
        currentSongIndex={currentSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default Player;
