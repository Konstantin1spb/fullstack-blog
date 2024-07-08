const express = require("express");
const mapUser = require("../helpers/mapUser");

const { register, login } = require("../controllers/user");

const router = express.Router({ mergeParams: true });

router.post("/register", async (req, res) => {
  try {
    const { token, user } = await register(req.body.login, req.body.password);
    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { token, user } = await login(req.body.login, req.body.password);
    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

router.post("/logout", async (req, res) => {
  res.cookie("token", "", { httpOnly: true }).send({});
});

module.exports = router;