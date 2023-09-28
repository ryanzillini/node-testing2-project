const db = require("../../data/db-config");

async function getAll() {
  const players = await db("players");
  return players;
}

async function getById(id) {
  const player = await db("players").where("player_id", id).first();
  return player;
}

async function insert(newPlayer) {
  const [id] = await db("players").insert(newPlayer);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  insert,
};
