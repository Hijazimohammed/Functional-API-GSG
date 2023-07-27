import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { useStoreContext } from '../../Context';
import './style.css';

export const StorePage = () => {
  const { store, isLoading, getStore } = useStoreContext();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    navigate(PATHS.STORES.EDIT.replace(':id', id), { replace: true });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getStore(id), []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='store-view'>
          <h1>Store {store.id}</h1>
          <h2>{store?.name}</h2>
          <p>{store.cities?.join(' ')}</p>
        </div>
      )}
      <button onClick={handleEdit}>Edit</button>
    </>
  );
};
