import React from "react";
import song from "../assets/song1.mp3";
import "./Music.css";
import { useRef } from "react";

function Music() {
  const audioRef = useRef();
  audioRef.current.src = song;

  console.log(audioRef);
  console.log(audioRef.current.currentTime);

  return (
    <div>
      <h1>Music</h1>
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <audio
        ref={audioRef}
        onChange={() => console.log(audioRef.current.currentTime)}
      ></audio>
      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Pause</button>
    </div>
  );
}

export default Music;
