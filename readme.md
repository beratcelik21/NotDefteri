
# Not Defteri Uygulaması

Bu proje, kullanıcıların notlarını alabileceği, düzenleyebileceği ve yönetebileceği gelişmiş bir not defteri uygulamasıdır. Uygulama, modern bir arayüz ve çok çeşitli özellikler sunarak kullanıcıların notlarını daha kolay ve etkili bir şekilde organize etmelerine yardımcı olur.

## Özellikler

- **Not Ekleme ve Düzenleme:** Kullanıcılar, başlık ve içerik ekleyerek notlar oluşturabilir ve bunları düzenleyebilir.
- **Zengin Metin Düzenleyici:** Yazı formatlama (kalın, italik, altı çizili, renkler) seçenekleri ile zenginleştirilmiş notlar.
- **Kategori ve Etiketleme Sistemi:** Notları kategorilere ayırma ve etiketlerle organize etme.
- **Arama ve Filtreleme:** Notlar arasında hızlı arama yapabilme ve filtreleme seçenekleri.
- **Güvenlik:** Şifre koruması ve veri şifreleme ile notların güvenliği.
- **Bulut Yedekleme:** Notları Google Drive, Dropbox gibi platformlara yedekleme.
- **Hatırlatıcılar ve Bildirimler:** Notlara hatırlatıcı ekleme ve bildirim alma.
- **Multimedya Desteği:** Resim, ses kaydı ve dosya ekleme özellikleri.
- **Versiyon Takibi:** Notların eski sürümlerini saklama ve geri yükleme.

## Kurulum

Projeyi çalıştırmak için aşağıdaki adımları izleyin:

1. **Proje deposunu klonlayın:**
   ```bash
   git clone https://github.com/kullanici_adiniz/not-defteri-uygulamasi.git
   ```
2. **Proje dizinine gidin:**
   ```bash
   cd not-defteri-uygulamasi
   ```
3. **Gerekli bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

4. **Uygulamayı başlatın:**
   ```bash
   npm start
   ```

## Kullanım

Uygulamayı başlattıktan sonra tarayıcınızdan aşağıdaki adrese giderek uygulamayı kullanmaya başlayabilirsiniz:

```
http://localhost:3000
```

- Yeni not oluşturmak için `+ Not Ekle` düğmesine tıklayın.
- Notları düzenlemek için notun üzerine tıklayın ve metin alanında düzenleme yapın.
- Arama çubuğunu kullanarak notlar arasında arama yapabilirsiniz.

## Teknolojiler

Bu proje şu teknolojileri kullanarak geliştirilmiştir:

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Veritabanı:** MongoDB
- **Yedekleme:** Google Drive API, Dropbox API (Opsiyonel)
- **Stil:** CSS, Bootstrap

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir fork yapın ve pull request açın:

1. Depoyu fork edin
2. Yeni bir dal oluşturun (`git checkout -b ozellik-adi`)
3. Değişikliklerinizi commitleyin (`git commit -m 'Özellik ekle'`)
4. Dalınıza push edin (`git push origin ozellik-adi`)
5. Bir Pull Request açın

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için [Lisans](LICENSE) dosyasına bakın.
not-defteri-uygulamasi/
│
├── backend/
│   ├── controllers/
│   │   └── notesController.js        # Notların işleyişini yöneten controller.
│   ├── models/
│   │   └── noteModel.js              # MongoDB veya başka bir veritabanı ile not yapısını tanımlayan model.
│   ├── routes/
│   │   └── noteRoutes.js             # Notlarla ilgili tüm API endpointleri.
│   ├── middleware/
│   │   └── authMiddleware.js         # Kullanıcı kimlik doğrulama kontrolü.
│   ├── config/
│   │   └── db.js                     # Veritabanı bağlantısı ve ayarları.
│   ├── server.js                     # Node.js uygulamasının başlangıç noktası.
│   └── .env                          # Ortam değişkenlerini saklamak için (örneğin veritabanı bağlantı bilgileri).
│
├── frontend/
│   ├── public/
│   │   ├── index.html                # React uygulaması için ana HTML dosyası.
│   ├── src/
│   │   ├── components/
│   │   │   ├── Note.js               # Not bileşeni, her not için UI.
│   │   │   ├── NoteForm.js           # Yeni not ekleme ve düzenleme formu.
│   │   │   └── Header.js             # Uygulamanın üst kısmındaki başlık bileşeni.
│   │   ├── pages/
│   │   │   ├── Home.js               # Notları listeleyen ana sayfa.
│   │   │   └── NoteDetail.js         # Notun detaylarını gösteren sayfa.
│   │   ├── App.js                    # Uygulamanın ana bileşeni.
│   │   ├── index.js                  # React uygulamasının başlangıç noktası.
│   │   ├── App.css                   # Ana stil dosyası.
│   │   ├── utils/
│   │   │   └── api.js                # API çağrılarını yöneten dosya.
│   │   └── context/
│   │       └── NoteContext.js        # Notlar için global state yönetimi (useContext hook).
│   ├── .env                          # API URL’leri gibi ortam değişkenleri.
│   ├── package.json                  # Frontend bağımlılıkları ve betikleri.
│   └── package-lock.json             # Projede kullanılan bağımlılıkların tam sürümleri.
│
├── tests/
│   ├── backend/
│   │   └── noteController.test.js     # Backend test dosyaları.
│   └── frontend/
│       └── NoteForm.test.js           # Frontend test dosyaları.
│
├── README.md                          # Proje hakkında genel bilgiler ve kurulum talimatları.
├── .gitignore                         # Git tarafından takip edilmeyecek dosyalar listesi (node_modules, .env).
└── package.json                       # Proje bağımlılıklarını ve betiklerini içerir.
