const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// authRoutes dosyasını dahil et
const authRoutes = require('./routes/authRoutes'); // Kullanıcı kayıt ve giriş işlemleri

// Ortam değişkenlerini yükle
dotenv.config();

const app = express();

// Middleware: JSON verilerini işlemek için
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDb Atlas bağlantısı başarılı"))
.catch((err) => console.log("MongoDb bağlantı hatası: ", err));

// Basit bir GET isteği
app.get('/', (req, res) => {
    res.send("Not Defteri Uygulaması API");
});

// auth rotasını ekle
app.use('/api/auth', authRoutes); // Kayıt ve giriş işlemleri için rotayı tanımla

// PORT değişkeni düzeltildi
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
