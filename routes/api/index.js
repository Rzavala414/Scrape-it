const router = require("express").Router()

var fetchRoutes = require("./fetch");
var clearRoutes = require("./fetch");
var noteRoutes = require("./fetch");
var headlineRoutes = require("./fetch");

router.use("/fetch",fetchRoutes);
router.use("/clear",clearRoutes);
router.use("/note",noteRoutes);
router.use("/headline",headlineRoutes);

module.exports = router;