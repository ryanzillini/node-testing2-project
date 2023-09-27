const rangersPlayers = [
  {
    name: "Mika Zibanijad",
    team: "New York Rangers",
    jersey_number: "93",
    position: "c",
  },
  {
    name: "Chris Kreider",
    team: "New York Rangers",
    jersey_number: "20",
    position: "rw",
  },
  {
    name: "Artemi Panarin",
    team: "New York Rangers",
    jersey_number: "10",
    position: "lw",
  },
  {
    name: "Adam Fox",
    team: "New York Rangers",
    jersey_number: "23",
    position: "ld",
  },
  {
    name: "Ryan Lindgren",
    team: "New York Rangers",
    jersey_number: "55",
    position: "rd",
  },
];

exports.seed = function (knex) {
  return knex("players").insert(rangersPlayers);
};
