const router = require("express").Router();
const htmlRoutes = require("./html/index.js");
const apiRoutes = require("./api/index.js");

router.use("/api", apiRoutes);

router.use("/", htmlRoutes);


module.exports = router;