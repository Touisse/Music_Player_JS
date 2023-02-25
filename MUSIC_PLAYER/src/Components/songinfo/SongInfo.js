import React from "react";
import './SongInfo.css'

const SongInfo = ({ currentSong }) => {
  return (
    <div className="song-info">
      <img src={currentSong.img} alt={currentSong.title} />
      <h3>{currentSong.title}</h3>
      <h4>{currentSong.artist}</h4>
    </div>
  );
};

export default SongInfo;
