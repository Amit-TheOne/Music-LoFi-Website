import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailsHeader from '../../components/Music/DetailsHeader';
import Error from '../../components/Music/Error';
import Loader from '../../components/Music/Loader';
import RelatedSongs from '../../components/Music/RelatedSongs';

import { useGetArtistDetailsQuery, useGetArtistSongsQuery } from '../../redux/services/shazamCore';

const ArtistDetails = () => { 
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
  const { data: artistSongs, isFetching: isFetchingArtistSongs } = useGetArtistSongsQuery({artistId});

  if (isFetchingArtistDetails || isFetchingArtistSongs) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData?.data[0]}
      />

      <RelatedSongs
        artistSongs={artistSongs}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;