import React, { useState, useEffect, useRef } from "react";
import '../media-player.css';
import Gooey from'../music/Gooey.mp3';
import InfiniteBloom from '../music/Infinite-Bloom.wav';
import Cloud10 from '../music/CLOUD10.mp3';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextSharpIcon from '@mui/icons-material/SkipNextSharp';
import SkipPreviousSharpIcon from '@mui/icons-material/SkipPreviousSharp';


// The list of songs
const songs = [
  {
    title: "Gooey",
    name: "GRiZ",
    source: Gooey,
  },
  {
    title: "Pawn It All",
    name: "Alicia Keys",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Pawn-It-All.mp3",
  },
  {
    title: "Infinite Bloom",
    name: "GRiZ",
    source: InfiniteBloom ,
  },
  {
    title: "Instant Crush",
    name: "Daft Punk ft. Julian Casablancas",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Daft-Punk-Instant-Crush.mp3",
  },
  {
    title: "Cloud 10",
    name: "Clozee & LSDream",
    source: Cloud10,
  },

  {
    title: "Physical",
    name: "Dua Lipa",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Dua-Lipa-Physical.mp3",
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Taylor-Swift-Delicate.mp3",
  },
];

const AudioPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(3); // Initial song index
  const [isPlaying, setIsPlaying] = useState(false); // Play/pause state
  const [progress, setProgress] = useState(0); // Track progress bar
  const audioRef = useRef(null); // Ref for the audio element

  // Function to update song information
  const updateSongInfo = () => {
    const song = songs[currentSongIndex];
    return {
      title: song.title,
      artist: song.name,
      source: song.source,
    };
  };

  // Play the song
  const playSong = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Pause the song
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Toggle between play/pause
  const playPauseHandler = () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  };

  // Update progress as the song plays
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setProgress(audio.currentTime);
  };

  // Handle when the progress bar is changed
  const handleProgressChange = (event) => {
    const value = event.target.value;
    audioRef.current.currentTime = value;
    setProgress(value);
  };

  // Go to the next song
  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  // Go to the previous song
  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  // Handle the end of the song
  const handleSongEnd = () => {
    nextSong();
    playSong(); // Automatically play the next song
  };

  // Effect to update progress bar max value and reset progress when the song changes
  useEffect(() => {
    const audio = audioRef.current;
    const song = songs[currentSongIndex];
    audio.src = song.source;
    audio.load();
    setProgress(0);

    // Add event listeners to update progress
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleSongEnd);

    return () => {
      // Cleanup event listeners
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [currentSongIndex]);

  // Effect to set the initial song info when the component mounts
  useEffect(() => {
    updateSongInfo();
  }, [currentSongIndex]);

  const songInfo = updateSongInfo();

  return (
    <div className="audio-player">
      <div className="song-info">
        <h1>{songInfo.title}</h1>
        <h3>{songInfo.artist}</h3>
      </div>

      <audio ref={audioRef} onLoadedMetadata={() => setProgress(0)}></audio>

        
      <div className="controls">
        <button className="backward" onClick={prevSong}><SkipPreviousSharpIcon/>
        </button>

        <button className="play-pause-btn" onClick={playPauseHandler}><PlayArrowIcon/><PauseIcon/>
          {isPlaying ? (
            <i className="fa fa-pause" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-play" aria-hidden="true"></i>
          )}
        </button>

        <button className="forward" onClick={nextSong}>
        <SkipNextSharpIcon/>
        </button>
     
    </div>
    <div className="slider">
      <input
        type="range"
        value={progress}
        max={audioRef.current ? audioRef.current.duration : 0}
        onChange={handleProgressChange}
        className="progress-bar"
      />

      </div>
    </div>
   

  );
};

export default AudioPlayer;