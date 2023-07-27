import axios from 'axios';
import { useState } from 'react';

const useAPI = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stores, setStores] = useState([]);
  const [, setError] = useState(null);
  const [store, setStore] = useState({});
  const [message, setMessage] = useState(null);

  const get = async () => {
    try {
      const { data } = await axios.get(url);
      setIsLoading(true);
      setStores(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSingle = async (id) => {
    try {
      const { data } = await axios.get(url + '/' + id);
      setIsLoading(true);
      setStore(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (body) => {
    try {
      const { data } = await axios.post(url, body);
      setIsLoading(true);
      setStores([...stores, data]);
      setMessage('success');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const put = async (id, body) => {
    try {
      const { data } = await axios.put(url + '/' + id, body);
      setIsLoading(true);
      setStores(stores.map((store) => (store.id === id ? data : store)));
      setMessage('success');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const del = async (id) => {
    try {
      await axios.delete(url + '/' + id);
      setIsLoading(true);
      // eslint-disable-next-line eqeqeq
      setStores(stores.filter((store) => store.id != id));
      setMessage('success');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    stores,
    isLoading,
    store,
    message,
    get,
    getSingle,
    post,
    del,
    put,
  };
};
export default useAPI;
