const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let userProfile = require('../models/user.model');

module.exports = function (app) {

    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'public');
        },
        filename: function(req, file, cb) {   
            cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
        },
    });

    const fileFilter = (req, file, cb) => {
        const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if(allowedFileTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    };

    let upload = multer({ storage, fileFilter });

    app.post('/api/auth/profile', upload.single('photo'), (req, res) =>{
        const username = req.body.username;
        const email = req.body.email;
        const address = req.body.address;
        const photo = req.file.filename;

        const profileData = {
            username,
            email,
            address,
            photo,
        };
        
        const newProfile = new userProfile(profileData);
        newProfile.save()
            .then(() => {res.status(200).send(profileData);console.log('111111221')})
            .catch(err => console.log('err', err));
        
    });
}