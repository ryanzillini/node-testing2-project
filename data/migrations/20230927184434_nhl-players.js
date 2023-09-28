exports.up = function (knex) {
  return knex.schema.createTable("players", (player) => {
    player.increments("player_id");
    player.string("name", 256).notNullable().unique();
    player.string("team", 128).notNullable();
    player.string("jersey_number", 4).notNullable();
    player.string("position").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("players");
};
