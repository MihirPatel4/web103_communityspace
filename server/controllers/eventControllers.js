import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM events`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;
    const results = await pool.query(`SELECT * FROM events WHERE id = $1`, [
      eventId,
    ]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default { getEvents, getEventById };
