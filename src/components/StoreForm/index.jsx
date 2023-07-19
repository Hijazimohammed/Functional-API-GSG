import React, { useState } from 'react';

const inputsArray = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
  },
  {
    id: 'cities',
    name: 'cities',
    type: 'textarea',
    label: 'Cities',
  },
];

export const StoreForm = ({ handleSubmit, isLoading, store }) => {
  const [data, setData] = useState({
    name: store?.name || '',
    cities: store?.cities || '',
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const tempData = {
      name: data.name,
      cities: data.cities,
    };
    handleSubmit(tempData);
  };
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        {inputsArray.map((input) => (
          <div key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === 'textarea' ? (
              <textarea
                id={input.id}
                name={input.name}
                value={data.cities}
                onChange={handleChangeInput}
              />
            ) : (
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                value={data.name}
                onChange={handleChangeInput}
              />
            )}
          </div>
        ))}

        <button type='submit'>{isLoading ? 'Loading...' : 'Submit'}</button>
      </form>
    </>
  );
};
