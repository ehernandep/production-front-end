import React, { useState } from 'react';
import './App.css';

const ParcelaTable = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState([]);
  const data = [
    { parcela: 'Parcela 1', producto: 'Producto A', siembra: '2023-01-15', cosecha: '2023-03-20', detalles: '' },
    { parcela: 'Parcela 2', producto: 'Producto B', siembra: '2023-02-10', cosecha: '2023-04-15', detalles: '' },
    { parcela: 'Parcela 3', producto: 'Producto C', siembra: '2023-03-05', cosecha: '2023-05-10', detalles: '' },
  ];

  const handleEditClick = () => {
    if (isEditing) {
      // Exit edit mode
      setIsEditing(false);
    } else {
      // Enter edit mode and initialize editedData with current data
      setEditedData(data);
      setIsEditing(true);
    }
  };

  const handleSaveChangesClick = () => {
    // Save changes and exit edit mode
    setIsEditing(false);
    // You can perform further actions here, such as sending the edited data to a server.
  };

  const handleInputChange = (index, fieldName, value) => {
    const updatedData = [...editedData];
    updatedData[index][fieldName] = value;
    setEditedData(updatedData);
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
                    value={editedData[index].parcela}
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
                    value={editedData[index].producto}
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
                    value={editedData[index].siembra}
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
                    value={editedData[index].cosecha}
                    onChange={(e) => handleInputChange(index, 'cosecha', e.target.value)}
                  />
                ) : (
                  item.cosecha
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedData[index].detalles}
                    onChange={(e) => handleInputChange(index, 'detalles', e.target.value)}
                  />
                ) : (
                  item.detalles
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button className={isEditing ? 'editing' : ''} onClick={handleEditClick}>
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
        {isEditing ? (
          <button className="save-button" onClick={handleSaveChangesClick}>
            Guardar Cambios
          </button>
        ) : (
          <button>Enviar</button>
        )}
      </div>
    </div>
  );
};

export default ParcelaTable;
