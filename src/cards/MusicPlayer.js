import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoIosMusicalNote } from "react-icons/io";

const MusicPlayer = () => {
  const songs = ["Bassheads.mp3", "Change Of Coast.mp3", "Colours.mp3"];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isDarkMode } = useTheme();

  const currentSong = `/music/${songs[currentSongIndex]}`;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audioElement = document.getElementById("audio-player");

    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    const handleSongEnd = () => {
      handleNext();
    };

    audioElement.addEventListener("ended", handleSongEnd);

    return () => {
      audioElement.removeEventListener("ended", handleSongEnd);
    };
  }, [isPlaying, currentSong]);

  return (
    <div className="w-full h-full p-3 flex flex-col justify-between">
      <div>
        <div className="flex flex-row justify-between">
          <IoIosMusicalNote className="text-[#62DBBE]" size="40px" />

          <button
            className={`rounded-full p-4  ${
              isDarkMode
                ? "bg-[#0d1117] dark-shadow text-[#62DBBE]"
                : "bg-[#62DBBE] light-shadow text-white"
            } hover:`}
            onClick={handlePlayPause}
          >
            {!isPlaying ? <FaPlay size="15px" /> : <FaPause size="15px" />}
          </button>
        </div>
      </div>

      <audio id="audio-player" src={currentSong} controls className="hidden">
        Your browser does not support the audio element.
      </audio>

      <div className="mb-5 px-2">
        <div
          className={`flex flex-row justify-start gap-3 mt-3 font-poppins text-[#62DBBE]`}
        >
          <div className="line-container">
            <div
              className={`line bg-[#62DBBE] ${isPlaying ? "animate" : ""} `}
            ></div>
            <div
              className={` bg-[#62DBBE] ${
                isPlaying ? "animate2 line" : "middle-line"
              } `}
            ></div>
            <div
              className={`line bg-[#62DBBE] ${isPlaying ? "animate3" : ""} `}
            ></div>
          </div>

          <p className="my-auto mt-2 font-semibold">
            {isPlaying ? "Now Playing" : "Last Played"}
          </p>
        </div>

        <p
          className={`text-xl font-poppins font-semibold ${
            !isDarkMode ? "text-black" : "text-white"
          }`}
        >
          {songs[currentSongIndex].replace(".mp3", "")}
        </p>
      </div>
    </div>
  );
};

export default MusicPlayer;
