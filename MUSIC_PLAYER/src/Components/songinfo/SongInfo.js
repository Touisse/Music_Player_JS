import React from "react";
import "./SongInfo.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        <div className="heart">
          <h3>{currentSong.title}</h3>
          <FavoriteBorderIcon
            sx={{
              fontSize: "30px",
              color: "black",
              "&:hover": { color: "black" },
            }}
          />
        </div>
        <h4>{currentSong.artist}</h4>
      </div>
    </>
  );
};

export default SongInfo;
