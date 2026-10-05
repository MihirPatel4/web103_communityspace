import dotenv from "dotenv";
import eventData from "../data/events.js";
import locationData from "../data/locations.js";
import { pool } from "./database.js";

dotenv.config();

const reset = async () => {
  try {
    await pool.query("DROP TABLE IF EXISTS events");
    await pool.query("DROP TABLE IF EXISTS locations");
    await pool.query(`
      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL
      )
    `);
    await pool.query(`
      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        location_id INT REFERENCES locations(id),
        name VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        image VARCHAR(255)
      )
    `);

    for (const location of locationData) {
      await pool.query(
        "INSERT INTO locations (name, address) VALUES ($1, $2)",
        [location.name, location.address],
      );
    }

    for (const event of eventData) {
      await pool.query(
        "INSERT INTO events (location_id, name, date, image) VALUES ($1, $2, $3, $4)",
        [event.location_id, event.name, event.date, event.image],
      );
    }

    console.log(
      `${locationData.length} locations and ${eventData.length} events added.`,
    );
  } catch (error) {
    throw error;
  }
};

reset();