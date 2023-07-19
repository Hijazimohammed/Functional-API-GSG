import React from 'react';
import './style.css';

const Table = ({ isLoading, columns, data, onRowClick = () => {} }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>

        {!isLoading && (
          <tbody>
            {data.map((row) => (
              <tr key={row.id} onClick={() => onRowClick(row)}>
                {columns.map((column) => (
                  <td key={`${row.id + column.key}`}>
                    {column.render
                      ? column.render(row)
                      : Array.isArray(row[column.key])
                      ? row[column.key].join(' - ')
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isLoading && <h1>Loading...</h1>}
    </>
  );
};

export default Table;
