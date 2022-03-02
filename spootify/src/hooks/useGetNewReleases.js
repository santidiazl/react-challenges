import { useState, useEffect } from 'react';
import api from '../api';

const useGetNewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);
  const endpoint = 'new-releases';

  const fetchNewReleases = async () => {
    const {
      albums: { items },
    } = await api.fetchResource(endpoint);
    setNewReleases(items);
  };

  useEffect(() => {
    fetchNewReleases();
  }, []);

  return newReleases;
};

export default useGetNewReleases;
