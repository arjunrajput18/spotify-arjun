import React from "react";
import "./SingleMusicCard.css";
import { useData } from "../../Context/DataContext";

export const SingleMusicCard = ({ song }) => {
  const { dataState:{selectedSong},dataDispatch } = useData();

  const handleMusicClick = () => {
    dataDispatch({ type: "PLAYING", payload: true });
    dataDispatch({ type: "SELECTED_SONG", payload: song });
  };

  const formatTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };
  return (
    <li key={song._id} className={`song-item ${selectedSong?._id===song?._id && "aciveSong"}`} onClick={handleMusicClick}>
      <div className="song-info">
        <div className="song-icon-container">
          <img src={song?.photo} alt={song?.title} className="song-icon" />
        </div>
        <div className="song-details">
          <div className="song-title">{song?.title}</div>
          <p className="song-artist">{song?.artist}</p>
        </div>
      </div>
      <div className="song-duration">
        <p className="song-timing">{formatTime(song?.duration)}</p>
      </div>
    </li>
  );
};
