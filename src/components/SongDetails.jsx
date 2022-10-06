import React from 'react';
import { useParams } from 'react-router-dom';

const SongDetails = () => {
  const { trackId } = useParams();

  return (
    <div>
      songDetails {trackId}
      {console.log({ trackId })}

    </div>
  );
};

export default SongDetails;
