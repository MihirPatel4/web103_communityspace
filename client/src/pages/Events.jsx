import { useState, useEffect } from "react";
import Event from "../components/Event";
import "../css/Event.css";
import "../css/LocationEvents.css";
import EventsAPI from "../services/EventsAPI";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const eventData = await EventsAPI.getAllEvents();
        setEvents(eventData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="location-events">
      <main>
        {events && events.length > 0 ? (
          events.map(event => (
            <Event
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.date}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            {"No events scheduled yet!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default Events;