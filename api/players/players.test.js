/* eslint-disable no-undef */
const request = require("supertest");
const db = require("../../data/db-config");
const server = require("../server");

const player1 = {
  name: "Joey Chestnut",
  team: "New York Rangers",
  jersey_number: "44",
  position: "lw",
};

const baseurl = "/api/players";

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("Player model functions", () => {
  describe("get request", () => {
    test("resolves to all players in db", async () => {
      const res = await request(server).get(`${baseurl}`);
      expect(res.body).toHaveLength(5);
    });
    test("status is 200", async () => {
      const res = await request(server).get(`${baseurl}`);
      expect(res.status).toBe(200);
    });
  });

  // eslint-disable-next-line no-undef
  describe("post request", () => {
    test("posts new player to the db", async () => {
      await request(server).post(baseurl).send(player1);
      expect(await db("players")).toHaveLength(6);
    });
    test("responds with status 202 Created", async () => {
      const res = await request(server).post(baseurl).send(player1);
      expect(res.status).toBe(202);
    });
  });
});
