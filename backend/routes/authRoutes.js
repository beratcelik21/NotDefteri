const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController"); 
const authMiddleware = require("../middleware/authMiddleware"); // authMiddleware'i dahil ettik
const router = express.Router();

// Kullanıcı kaydı rotası
router.post("/register", registerUser);

// Kullanıcı girişi rotası
router.post("/login", loginUser);

// Korunan bir rota (örnek: profil görüntüleme)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profil bilgileri",
    user: req.user, // Middleware'den gelen kullanıcı bilgisi
  });
});

module.exports = router;
