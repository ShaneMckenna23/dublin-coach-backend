import models from "../../models";

export async function getById(parentValue, { id }) {
  return await models.Stop.findOne({ where: { id } });
}

export async function getAll() {
  return await models.Stop.findAll();
}

export async function create(parentValue, { name, lat, long }) {
  return await models.Stop.create({
    name,
    lat,
    long
  });
}

export async function remove(parentValue, { id }) {
  return await models.Stop.destroy({ where: { id } });
}
