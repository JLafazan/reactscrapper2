const router = require("express").Router();
const savedController = require("../../controllers/savedController.js");

// Matches with "/api/saved"
router.route("/")
  .get(savedController.findAll)
  .post(savedController.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .get(savedController.findById)
  .put(savedController.update)
  .delete(savedController.remove);

module.exports = router;





