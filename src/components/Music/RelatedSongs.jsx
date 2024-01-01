import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, artistSongs, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      { !artistId
        ? Object.keys(data?.resources?.["shazam-songs"] || {})?.map((songKey, i) => {
          const song = data?.resources?.["shazam-songs"]?.[songKey];
          return(
            <SongBar
              key={`${song.id}-${i}`}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          )})
       : artistSongs?.data.map((song, i) => (
          <SongBar
            key={`${artistId}-${i}`}
            i={i}
            artistId={artistId}
            artistSongs={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))
      }
    </div>
  </div>
);

export default RelatedSongs;
