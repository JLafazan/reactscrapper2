const router = require("express").Router();
const savesController = require("../../controllers/savesController.js");

// Matches with "/api/saved/"
router.route("/")
  .get(savesController.findAll)
  .post(savesController.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .get(savesController.findById)
  .put(savesController.update)
  .delete(savesController.remove);

module.exports = router;





