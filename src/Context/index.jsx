import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PATHS } from '../router/paths';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/api';

const StoreContext = React.createContext({
  stores: [],
  setStores: [],
  store: {},
  setStore: {},
  isLoading: false,
  setIsLoading: false,
  handleDelete: (id) => {},
  getStore: (id) => {},
  createStore: (body) => {},
  editStore: (body, id) => {},
});

export const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [store, setStore] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
    axios
      .delete(API_URL + id)
      .then((res) => {
        const tempStores = stores.filter((store) => store.id != id);
        setStores(tempStores);
      })
      .catch((err) => console.log(err.message));
  };
  const getStores = () => {
    setIsLoading(true);
    axios
      .get(API_URL)
      .then((res) => {
        setStores(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(getStores, []);

  const getStore = (id) => {
    setIsLoading(true);
    axios
      .get(API_URL + id)
      .then((res) => {
        setStore(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const createStore = (body) => {
    setIsLoading(true);
    axios
      .post(API_URL, body)
      .then(({ data }) => {
        setStores([...stores, data]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  };
  const editStore = (body, id) => {
    setIsLoading(true);
    axios
      .put(API_URL + id, body)
      .then(({ data }) => {
        setStores([...stores.filter((store) => store.id != id), data]);

        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StoreContext.Provider
      value={{
        stores: stores,
        setStores: setStores,
        store: store,
        setStore: setStore,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        handleDelete: handleDelete,
        getStore: getStore,
        createStore: createStore,
        editStore: editStore,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
export const useStoreContext = () => {
  return useContext(StoreContext);
};
