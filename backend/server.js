const express = require('express');
const cors = require('cors');
const avengersRoutes = require('./routes/avengersRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Avengers!');
});

// Rutas Avengers
app.use('/avengers', avengersRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
