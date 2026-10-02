const getAllEvents = async () => {
  const response = await fetch('/events');
  const data = await response.json();
  return data;
};

const getEventById = async (id) => {
  const response = await fetch(`/events/${id}`);
  const data = await response.json();
  return data;
};

export default { getAllEvents, getEventById };