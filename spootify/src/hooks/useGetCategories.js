import { useState, useEffect } from 'react';
import api from '../api';

const useGetCategories = () => {
  const [categories, setCategories] = useState([]);
  const endpoint = 'categories';

  const fetchCategories = async () => {
    const {
      categories: { items },
    } = await api.fetchResource(endpoint);
    setCategories(items);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return categories;
};

export default useGetCategories;
