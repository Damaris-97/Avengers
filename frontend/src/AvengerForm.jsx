
import React, { useEffect, useState } from 'react';

const AvengerForm = ({ onSave, editingAvenger, onCancel }) => {
  const [nombre, setNombre] = useState('');
  const [alias, setAlias] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [actor, setActor] = useState('');

  useEffect(() => {
    if (editingAvenger) {
      setNombre(editingAvenger.nombre);
      setAlias(editingAvenger.alias);
      setHabilidades(JSON.parse(editingAvenger.habilidades).join(', '));
      setActor(editingAvenger.actor);
    } else {
      setNombre('');
      setAlias('');
      setHabilidades('');
      setActor('');
    }
  }, [editingAvenger]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const avenger = {
      id: editingAvenger?.id,
      nombre,
      alias,
      habilidades: JSON.stringify(habilidades.split(',').map(h => h.trim())),
      actor
    };
    onSave(avenger);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input placeholder="Alias" value={alias} onChange={(e) => setAlias(e.target.value)} />
      <input placeholder="Habilidades (separadas por coma)" value={habilidades} onChange={(e) => setHabilidades(e.target.value)} />
      <input placeholder="Actor" value={actor} onChange={(e) => setActor(e.target.value)} />
      <button type="submit">{editingAvenger ? 'Actualizar' : 'Agregar'}</button>
      {editingAvenger && <button type="button" onClick={onCancel}>Cancelar</button>}
    </form>
  );
};

export default AvengerForm;
