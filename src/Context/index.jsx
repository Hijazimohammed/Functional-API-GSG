import React, { useContext, useEffect } from 'react';
import { API_URL } from '../config/api';
import useAPI from '../Hooks/useAPI';

const StoreContext = React.createContext({
  stores: [],
  store: {},
  isLoading: false,
  handleDelete: (id) => {},
  getStore: (id) => {},
  createStore: (body) => {},
  editStore: (body, id) => {},
});

export const StoreProvider = ({ children }) => {
  const { stores, store, get, getSingle, put, del, post, isLoading } =
    useAPI(API_URL);

  const handleDelete = (id) => {
    del(id);
  };
  const getStores = () => {
    get();
  };
  useEffect(() => {
    getStores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getStore = (id) => {
    getSingle(id);
  };
  const createStore = (body) => {
    post(body);
  };
  const editStore = (body, id) => {
    put(id, body);
  };

  return (
    <StoreContext.Provider
      value={{
        stores: stores,
        store: store,
        isLoading: isLoading,
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
