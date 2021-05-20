const path = require("path");
const router = require("express").Router();
const apiRoutes = require('../routes/api/index');

// API Routes
// =============================================================
router.use("/api/artists", apiRoutes);

// API: If no routes are used, send client side app.
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router;