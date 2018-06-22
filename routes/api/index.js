const router = require("express").Router();
const saveRoutes = require("./saved");

// Save routes
router.use("/saved", saveRoutes);

module.exports = router;
