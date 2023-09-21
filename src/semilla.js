import React, { useState, useEffect } from 'react';
import './App.css';

const Selecsemilla = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState([]);
  const data = [
    { producto: 'rosas', Descripcion: 'flor', duracionCosecha: '20semanas', climaAdecuado: 'humedo', otrasConsideraciones: 'sdf'},
    { producto: 'manzana', Descripcion: 'fruta', duracionCosecha: '30semanas', climaAdecuado: 'seco', otrasConsideraciones: 'sdf'},
    { producto: 'tomate', Descripcion: 'vegetal, duracionCosecha: '18semanas', climaAdecuado: 'humedo', otrasConsideraciones: 'sdf'},
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
      <h1>Selección de la cosecha</h1>
      <table>
        <thead>
          <tr>
            <th>Semilla</th>
            <th>Descripcion</th>
            <th>Duracion De Cosecha</th>
            <th>Clima Adecuado</th>
            <th>Otras Consideraciones</th>
          </tr>
        </thead>
        <tbody>
          {editedData.map((item, index) => (
            <tr key={index}>
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
                    value={item.Descripcion}
                    onChange={(e) => handleInputChange(index, 'Descripcion', e.target.value)}
                  />
                ) : (
                  item.Descripcion
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.duracionCosecha}
                    onChange={(e) => handleInputChange(index, 'duracionCosecha', e.target.value)}
                  />
                ) : (
                  item.duracionCosecha
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.climaAdecuado}
                    onChange={(e) => handleInputChange(index, 'climaAdecuado', e.target.value)}
                  />
                ) : (
                  item.climaAdecuado
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.otrasConsideraciones}
                    onChange={(e) => handleInputChange(index, 'otrasConsideraciones', e.target.value)}
                  />
                ) : (
                  item.otrasConsideraciones
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
              Guardar
            </button>
            <button onClick={handleCancel}>Cancelar</button>
          </>
        ) : (
          <button className={isEditing ? 'editing' : ''} onClick={handleEditClick}>
            Editar
          </button>
        )}
        <button className="enviar">Enviar</button>
      </div>
    </div>
  );
};
export default Selecsemilla;
