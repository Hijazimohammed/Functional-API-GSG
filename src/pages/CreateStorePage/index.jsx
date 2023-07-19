import React, { useState } from 'react';
import axios from 'axios';
import { H1 } from '../../components/Typography';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { StoreForm } from '../../components/StoreForm';
import { useStoreContext } from '../../Context';

export const CreateStorePage = () => {
  const { isLoading, createStore } = useStoreContext();

  const navigate = useNavigate();

  const handleCreateStore = (body) => {
    createStore(body);
    navigate(PATHS.STORES.ROOT, { replace: true });
  };
  return (
    <div>
      <>
        <H1>Create Store</H1>

        <StoreForm handleSubmit={handleCreateStore} isLoading={isLoading} />
      </>
    </div>
  );
};
