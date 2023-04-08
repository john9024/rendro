const config = require("../config/auth.config");
const { images } = require("../models");
const db = require("../models");
const Images = db.images;

exports.pullout = (req, res) => {
    // Images.findOne(
    //     {title: req.body.title,}
    // )
    // .exec(()=> {
    //    return console.log('result', ); 
    // });

    Images.find()
    .exec((err, image)=> {
        res.status(200).send(image);
        console.log('result', image); 
    });
    
};

exports.push = (req, res) => {

};