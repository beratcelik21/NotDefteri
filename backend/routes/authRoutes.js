const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require("../models/userModel")

const router = express.Router();

// kullanıcı kaydı

router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    try{
        //* Kullanıcı Adı Kontrolu
    const userExists = await User.findOne({username})

    if (userExists) {
        return response.status(400).json({message: "Bu kullanıcı adı zaten mevcut"})

    }
    // Yeni kullanıcı oluşturma
    const newUser = new User({
        username,
        password,
    })

    //Kaydet
    await newUser.save();

    //Kullanıcıya JWT token dondur

    const token = jwt.sign({id: newUser._id},process.env.JWT_SECRET,{expiresIn: "1h"})

    res.status(201).json({
        message: "Kullanıcı başarıyla oluşturuldu",
        token
    });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//* Kullanıcı girişi
router.post("/login", async (req, res) =>{
    const {username, password} = req.body;

    try {
        // ? Kullanıcıyı bul
        const user = await User.findOne({username})

        //? Şifreyi kontrol et
        if (user && (await bcrypt.compore(password, user.password))) {
            //? Başarılı girişte JWT token döndür
            const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET,{expiresIn: "1h"})

            res.json({
                message: "Giriş başarılı",
                token,
            })
        } else {
            res.status(401).json({message: "Gecersiz kullanıcı adı veya şifre"})
        }
    }
})
