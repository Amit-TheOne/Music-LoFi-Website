import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {Object.keys(data?.resources?.["shazam-songs"] || {})?.map((songKey, i) => {
        const song = data?.resources?.["shazam-songs"]?.[songKey];
        return(
            <SongBar
              key={`${artistId}-${song.id}-${i}`}
              song={song}
              i={i}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
        )})}
    </div>
  </div>
);

export default RelatedSongs;
