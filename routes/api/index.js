const router = require("express").Router();
const bookRoutes = require("./saved");

// Book routes
router.use("/saved", saveRoutes);

module.exports = router;
