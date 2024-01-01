import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailsHeader from '../../components/Music/DetailsHeader';
import Error from '../../components/Music/Error';
import Loader from '../../components/Music/Loader';
import RelatedSongs from '../../components/Music/RelatedSongs';

import { useGetArtistDetailsQuery } from '../../redux/services/shazamCore';

const ArtistDetails = () => { 
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData?.data[0]}
      />

      {/* <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      /> */}
    </div>
  );
};

export default ArtistDetails;