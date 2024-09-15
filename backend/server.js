const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Ortam değişkenlerini yükle
dotenv.config()

const app = express();
// Middleware: JSON verilerini işlemek için
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDb Atlas baglantısı basarılı"))
.catch((err) => console.log("MongoDb baglantı hatası: ", err))

// Basit bir GET isteği
app.get('/', (req, res) => {
    res.send("Not Defteri Uygulaması API")
})

// PORT değişkeni düzeltildi
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Sunucu ${PORT} portunda çalışıyor`)
})
