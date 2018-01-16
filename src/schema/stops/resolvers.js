// App Imports
import models from "../../models";

// Get stops by ID
export async function getById(parentValue, { id }) {
  return await models.Stop.findOne({ where: { id } });
}

// Get all stops
export async function getAll() {
  return await models.Stop.findAll();
}

// Create stop
export async function create(parentValue, { name, lat, long }) {
  return await models.Stop.create({
    name,
    lat,
    long
  });
}

// Delete stop
export async function remove(parentValue, { id }) {
  return await models.Stop.destroy({ where: { id } });
}
