const router = require("express").Router();
const Player = require("./players-model");

router.get("/", async (req, res, next) => {
  try {
    const players = await Player.getAll();
    res.status(200).json(players);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const player = await Player.getById(req.params.id);
    if (player) {
      res.status(201).json(player);
    } else {
      next({
        status: 404,
        message: `Player with id ${req.params.id} does not exist`,
      });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  Player.insert(req.body)
    .then((player) => {
      res.status(202).json(player);
    })
    .catch(next);
});

module.exports = router;
