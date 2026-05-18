const express = require("express");
const router = express.Router();

const {
  getAllArtisans,
  getTopArtisans,
  getArtisanById,
  searchArtisans,
  contactArtisan,
} = require("../controllers/artisanController");

router.get("/", getAllArtisans);

router.get("/top", getTopArtisans);

router.get("/search", searchArtisans);

router.post("/:id/contact", contactArtisan);

router.get("/:id", getArtisanById);

module.exports = router;