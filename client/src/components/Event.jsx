import React from "react";
import "../css/Event.css";

const Event = ({ name, date, image }) => {
  return (
    <article className="event-information">
      <img src={image} alt={name} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{name}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {date}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Event;
