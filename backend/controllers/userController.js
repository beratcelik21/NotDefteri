const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// Kullanıcı kaydı
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Kullanıcı adı kontrolü
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "Bu kullanıcı adı zaten mevcut" });
    }

    // Yeni kullanıcı oluşturma
    const newUser = new User({ username, password });

    // Kaydet
    await newUser.save();

    // Kullanıcıya JWT token döndür
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || "defaultsecret", {
      expiresIn: "24h",
    });

    res.status(201).json({
      message: "Kullanıcı başarıyla oluşturuldu",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kullanıcı girişi
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Kullanıcıyı bul
    const user = await User.findOne({ username });

    // Şifreyi kontrol et
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Geçersiz kullanıcı adı veya şifre" });
    }

    // Başarılı girişte JWT token döndür
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "defaultsecret", {
      expiresIn: "24h",
    });

    res.json({ message: "Giriş başarılı", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
