// Gerekli modülleri dahil et
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");  // CORS'u dahil ettik
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

// Ortam değişkenlerini yükle
dotenv.config();

const app = express();

// CORS ayarları (frontend'in backend'e erişebilmesi için)
app.use(cors());

// Middleware: JSON verilerini işlemek için
app.use(express.json());

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas bağlantısı başarılı"))
  .catch((err) => console.log("MongoDB bağlantı hatası: ", err));

// Basit bir GET isteği (Test için)
app.get("/", (req, res) => {
  res.send("Not Defteri Uygulaması API çalışıyor");
});

// Rotalar
app.use("/api/auth", authRoutes); // Kullanıcı kayıt ve giriş işlemleri
app.use("/api/notes", noteRoutes); // Not CRUD işlemleri

// PORT ayarı
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
