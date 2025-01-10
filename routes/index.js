const router = require("express").Router();
const htmlRoutes = require("./html/index.js");
const apiRoutes = require("./api/index.js");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;