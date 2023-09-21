import React, { useState, useEffect } from 'react';
import './App.css';

const ParcelaTable = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState([]);
  const data = [
    { parcela: 'Parcela 1', producto: 'Producto A', siembra: '2023-01-15', cosecha: '2023-03-20' },
    { parcela: 'Parcela 2', producto: 'Producto B', siembra: '2023-02-10', cosecha: '2023-04-15' },
    { parcela: 'Parcela 3', producto: 'Producto C', siembra: '2023-03-05', cosecha: '2023-05-10' },
  ];

  useEffect(() => {
    setEditedData([...data]); // Initialize editedData with the initial data
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle editing mode
  };

  const handleInputChange = (index, fieldName, value) => {
    const updatedData = [...editedData];
    updatedData[index][fieldName] = value;
    setEditedData(updatedData);
  };

  const handleSaveChanges = () => {
    // Save the changes and exit edit mode
    setIsEditing(false);
    // You can perform any further actions here, such as sending data to a server
    console.log('Edited Data:', editedData);
  };

  const handleCancel = () => {
    // Discard changes and exit edit mode
    setEditedData([...data]);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Seguimiento Parcelas</h1>
      <table>
        <thead>
          <tr>
            <th>Parcela</th>
            <th>Producto</th>
            <th>Fecha siembra</th>
            <th>Fecha Cosecha</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {editedData.map((item, index) => (
            <tr key={index}>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.parcela}
                    onChange={(e) => handleInputChange(index, 'parcela', e.target.value)}
                  />
                ) : (
                  item.parcela
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.producto}
                    onChange={(e) => handleInputChange(index, 'producto', e.target.value)}
                  />
                ) : (
                  item.producto
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.siembra}
                    onChange={(e) => handleInputChange(index, 'siembra', e.target.value)}
                  />
                ) : (
                  item.siembra
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.cosecha}
                    onChange={(e) => handleInputChange(index, 'cosecha', e.target.value)}
                  />
                ) : (
                  item.cosecha
                )}
              </td>
              <td>
                {isEditing ? (
                  <button disabled>Ver Detalles</button>
                ) : (
                  <button>Ver Detalles</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        {isEditing ? (
          <>
            <button className="editing" onClick={handleSaveChanges}>
              Guardar Cambios
            </button>
            <button onClick={handleCancel}>Cancelar</button>
          </>
        ) : (
          <button className={isEditing ? 'editing' : ''} onClick={handleEditClick}>
            Editar
          </button>
        )}
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default ParcelaTable;
