import { useState, useEffect } from 'react';
import api from '../api';

const useGetFeaturedPlaylists = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const endpoint = 'featured-playlists';

  const fetchFeaturedPlaylists = async () => {
    const {
      playlists: { items },
    } = await api.fetchResource(endpoint);
    setFeaturedPlaylists(items);
  };

  useEffect(() => {
    fetchFeaturedPlaylists();
  }, []);

  return featuredPlaylists;
};

export default useGetFeaturedPlaylists;
