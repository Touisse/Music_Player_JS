import React from "react";
import "./SongInfo.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SongInfo = ({ currentSong }) => {
  return (
    <>
      <div className="top">
        <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} className="icon" />
        <h2>Playing Now</h2>
        <MoreVertIcon sx={{ fontSize: "35px" }} className="icon" />
      </div>
      <div className="song-info">
        <img src={currentSong.img} alt={currentSong.title} />
        <h3>{currentSong.title}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </>
  );
};

export default SongInfo;
