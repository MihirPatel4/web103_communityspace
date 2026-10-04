const getAllLocations = async () => {
  const response = await fetch("/locations");
  const data = await response.json();
  return data;
};

const getLocationById = async (id) => {
  const response = await fetch(`/locations/${id}`);
  const data = await response.json();
  return data;
};

export default { getAllLocations, getLocationById };
