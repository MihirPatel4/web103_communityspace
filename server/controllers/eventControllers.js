import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM events`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getEventsByLocation = async (req, res) => {
  try {
    const locationId = req.params.id;
    const results = await pool.query(`SELECT * FROM events WHERE location_id = $1`, [
      locationId,
    ]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default { getEvents, getEventsByLocation };
