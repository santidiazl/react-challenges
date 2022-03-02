import React from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
// Hooks
import useGetNewReleases from '../../../hooks/useGetNewReleases';
import useGetFeaturedPlaylists from '../../../hooks/useGetFeaturedPlaylists';
import useGetCategories from '../../../hooks/useGetCategories';

const Discover = () => {
  const newReleases = useGetNewReleases();
  const playlists = useGetFeaturedPlaylists();
  const categories = useGetCategories();

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
