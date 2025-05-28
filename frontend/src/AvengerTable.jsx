import React from 'react';

const AvengerTable = ({ avengers, onEdit, onDelete }) => {
  return (
    <table border="1" cellPadding="5" cellSpacing="0" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Alias</th>
          <th>Habilidades</th>
          <th>Actor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {avengers.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>No hay Avengers disponibles</td>
          </tr>
        ) : (
          avengers.map(avenger => (
            <tr key={avenger.id}>
              <td>{avenger.nombre}</td>
              <td>{avenger.alias}</td>
              <td>{JSON.parse(avenger.habilidades).join(', ')}</td>
              <td>{avenger.actor}</td>
              <td>
                <button onClick={() => onEdit(avenger)}>Editar</button>
                <button onClick={() => onDelete(avenger.id)} style={{ marginLeft: '10px' }}>Eliminar</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AvengerTable;
