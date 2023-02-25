import React, { useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import "./Controls.css";
import { styled, Slider } from "@mui/material";
import { color } from "@mui/system";

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "white",
  height: 2,
  "&:hover": {
    cursor: "auto",
  },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
    color: "black",
  },
}));

const Controls = ({ currentSongIndex, setCurrentSongIndex, songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  const audioEl = useRef(null);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioEl) {
      audioEl.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioEl?.current?.duration);
        const _elapsed = Math.floor(audioEl?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);
  // Volume btn
  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{
          color: "black",
          fontSize: "30px ",
          "&:hover": { color: "white" },
        }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{
          color: "black",
          fontSize: "30px ",
          "&:hover": { color: "white" },
        }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{
          color: "black",
          fontSize: "30px ",
          "&:hover": { color: "white" },
        }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{
          color: "black",
          fontSize: "30px ",
          "&:hover": { color: "white" },
        }}
        onClick={() => setMute(!mute)}
      />
    );
  }
  const handleAudioUpdate = () => {
    //Input total length of the audio
    let minutes = Math.floor(audioEl.current.duration / 60);
    let seconds = Math.floor(audioEl.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(audioEl.current.currentTime / 60);
    let currentSec = Math.floor(audioEl.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (audioEl.current.currentTime / audioEl.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    audioEl.current.currentTime =
      (e.target.value * audioEl.current.duration) / 100;
  };
  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  const playNextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1 > songs.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };
  const playPrevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
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
    <div>
      <div className="progress">
        <input
          type="range"
          name="musicProgressBar"
          className="musicProgressBar"
          value={audioProgress}
          onChange={handleMusicProgressBar}
        />
      </div>
      <div className="controls">
        <audio
          src={songs[currentSongIndex].src}
          ref={audioEl}
          onTimeUpdate={handleAudioUpdate}
        />

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
      <div className="volume">
        <VolumeBtns />
        <PSlider
          min={0}
          max={100}
          value={volume}
          onChange={(e, v) => setVolume(v)}
        />
      </div>
    </div>
  );
};

export default Controls;
