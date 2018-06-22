const router = require("express").Router();
const savesController = require("../../controllers/savesController.js");

// Matches with "/api/saves/"
router.route("/")
  .get(savesController.findAll)
  .post(savesController.create);

// Matches with "/api/saves/:id"
router
  .route("/:id")
  .get(savesController.findById)
  .put(savesController.update)
  .delete(savesController.remove);

module.exports = router;





