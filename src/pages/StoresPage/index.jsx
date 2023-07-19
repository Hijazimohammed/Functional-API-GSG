import React from 'react';
import Table from '../../components/Table';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { STORES_COLUMNS } from '../../constants/Stores';
import { useStoreContext } from '../../Context';

export const StoresPage = () => {
  const { stores, isLoading, handleDelete } = useStoreContext();

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(PATHS.STORES.EDIT.replace(':id', id), { replace: true });
  };
  const handleCreate = () => {
    navigate(PATHS.STORES.CREATE, { replace: true });
  };
  const handleView = (row) => {
    console.log(row, 'is viewed');
    navigate(PATHS.STORES.VIEW.replace(':id', row.id), { replace: true });
  };

  return (
    <div>
      <h1>Stores</h1>

      <button onClick={handleCreate}>Create Store</button>

      <Table
        columns={STORES_COLUMNS(handleDelete, handleEdit)}
        data={stores}
        onRowClick={handleView}
        isLoading={isLoading}
      />
    </div>
  );
};
