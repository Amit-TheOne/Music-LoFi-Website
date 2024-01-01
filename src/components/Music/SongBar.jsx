/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPauseButton';

const SongBar = ({ song, i, artistId, artistSongs, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2 
    ${ !artistId 
        ? activeSong?.title === song?.attributes?.title ? 'bg-[#4c426e]' : 'bg-transparent'
        : activeSong?.title === artistSongs?.attributes?.name ? 'bg-[#4c426e]' : 'bg-transparent'
      }`}>
    
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistId ? artistSongs?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.attributes?.images?.coverArt}
        alt={artistId ? artistSongs?.attributes?.name : song?.attributes?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link to={`/music/songs/${song.id}`}>
            <p className="text-xl font-bold text-white">
              {song?.attributes?.title}
            </p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {artistSongs?.attributes?.name}
          </p>
        )}
        <p className="text-base text-gray-300 mt-1">
          {artistId ? artistSongs?.attributes?.albumName : song?.attributes.artist}
        </p>
      </div>
    </div>
    {!artistId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      )
      : null}
  </div>
);

export default SongBar;