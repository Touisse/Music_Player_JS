import React from "react";
import "./Topbar.css";
import EarbudsOutlinedIcon from "@mui/icons-material/EarbudsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SpatialTrackingOutlinedIcon from "@mui/icons-material/SpatialTrackingOutlined";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <EarbudsOutlinedIcon /> Music Player <EarbudsOutlinedIcon />
          </span>
		 
        </div>
       
        <div className="topRight">
          <div className="topbarIconContainer">
            <SettingsOutlinedIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SpatialTrackingOutlinedIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer"></div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
