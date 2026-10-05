import { pool } from "../config/database.js";

const getLocations = async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM locations`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const locationId = req.params.id;
    const results = await pool.query(`SELECT * FROM locations WHERE id = $1`, [
      locationId,
    ]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default { getLocations, getLocationById };
