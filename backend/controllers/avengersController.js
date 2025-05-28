// backend/controllers/avengersController.js
const db = require('../config/db');


// GET all Avengers
exports.getAllAvengers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM avengers');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST add Avenger
exports.addAvenger = async (req, res) => {
  const { nombre, alias, habilidades, actor } = req.body;
  try {
    await db.query(
      'INSERT INTO avengers (nombre, alias, habilidades, actor) VALUES (?, ?, ?, ?)',
      [nombre, alias, JSON.stringify(habilidades), actor]
    );
    res.status(201).json({ message: 'Avenger agregado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update Avenger
exports.updateAvenger = async (req, res) => {
  const { id } = req.params;
  const { nombre, alias, habilidades, actor } = req.body;
  try {
    await db.query(
      'UPDATE avengers SET nombre = ?, alias = ?, habilidades = ?, actor = ? WHERE id = ?',
      [nombre, alias, JSON.stringify(habilidades), actor, id]
    );
    res.json({ message: 'Avenger actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE Avenger
exports.deleteAvenger = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM avengers WHERE id = ?', [id]);
    res.json({ message: 'Avenger eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// GET Avenger por id
exports.getAvengerById = async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await db.query('SELECT * FROM avengers WHERE id = ?', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Avenger no encontrado' });
      }
      res.json(rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  
