import React, { useEffect, useState } from 'react';
import AvengerForm from './AvengerForm';
import AvengerTable from './AvengerTable';
import shieldImage from './shield.png';  // Importamos la imagen desde src

const API_URL = 'http://localhost:3000/avengers';

const App = () => {
  const [avengers, setAvengers] = useState([]);
  const [editingAvenger, setEditingAvenger] = useState(null);

  const fetchAvengers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setAvengers(data);
    } catch (err) {
      console.error('Error al obtener avengers:', err);
    }
  };

  const handleSave = async (avenger) => {
    const method = avenger.id ? 'PUT' : 'POST';
    const url = avenger.id ? `${API_URL}/${avenger.id}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(avenger),
      });
      await res.json();
      setEditingAvenger(null);
      fetchAvengers();
    } catch (err) {
      console.error('Error al guardar avenger:', err);
    }
  };

  const handleEdit = (avenger) => {
    setEditingAvenger(avenger);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchAvengers();
    } catch (err) {
      console.error('Error al eliminar avenger:', err);
    }
  };

  useEffect(() => {
    fetchAvengers();
  }, []);

  // Estilos para el fondo
const backgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${shieldImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  filter: 'brightness(0.5) opacity(0.1)', // oscurece y hace transparente
  zIndex: -1,
};



return (
  <>
    <div style={backgroundStyle} />
    <div style={{ position: 'relative', zIndex: 1, padding: '20px', color: 'white', textShadow: '0 0 5px black' }}>
      <h1>S.H.I.E.L.D.</h1>
      <AvengerForm onSave={handleSave} editingAvenger={editingAvenger} onCancel={() => setEditingAvenger(null)} />
      <AvengerTable avengers={avengers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  </>
);
};

export default App;