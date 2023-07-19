import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { H1 } from '../../components/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { StoreForm } from '../../components/StoreForm';
import { PATHS } from '../../router/paths';
import { useStoreContext } from '../../Context';

export const EditStorePAge = () => {
  const { store, isLoading, getStore, editStore } = useStoreContext();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleEditStore = async (body) => {
    editStore(body, id);
    navigate(PATHS.STORES.ROOT, { replace: true });
  };

  useEffect(() => getStore(id), []);
  return (
    <div>
      <H1>Edit Store {id}</H1>

      <StoreForm
        store={store}
        handleSubmit={handleEditStore}
        isLoading={isLoading}
      />
    </div>
  );
};
