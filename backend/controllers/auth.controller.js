const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const profileString = 'Profile';
//const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { schema } = require("../models/user.model");

exports.signup = (req, res) => {
  console.log("========")
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ message: "User was registered successfully!" });
    

  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
        );
        
      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }
      

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      console.log('signin request received')

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
      });
    });
};

exports.updateuser = (req, res) => {
  const updateuser = User.findOneAndUpdate({email:req.body.email},{
    
    // username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phone: req.body.phone,

  });
  // User.findOneAndUpdate({email})

  updateuser.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Profile was updated successfully!" });
    res.status(200).send({
      id: updateuser.id,
      firstname: updateuser.firstname,
      lastname: updateuser.lastname,
      address: updateuser.address,
      phone: updateuser.phone,}
    )
    console.log('res', message);

  });
};

// exports.updateuser = (req, res) => {
//   // console.log('res================');
  
  
//     const { _id } = req.body;
//     const { firstname, lastname, address, phone, password } = req.body;
//     Profile.findOne({email: req.body.email});
//     console.log('res================');
//     if(!object)    
//     return res.status(400).json({error: `${profileString} not found`});
//     console.log('res=====bbb===========');  
//     if(email) User.findOneAndUpdate({_id}, {email});

//     if(password) {
//         const regex =
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!regex.test(password))
//           return res.status(400).json({
//             error:
//             'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character',
//       });

//       // object.username = username ? username : object.username;
//       object.firstname = firstname ? firstname : object.firstname;
//       object.lastname = lastname ? lastname : object.lastname;
//       object.address = address ? address : object.address;
//       object.phone = phone ? phone : object.phone;
//       // object.image = image ? image : object.image
//       // object.bio = bio ? bio : object.bio
//       object.user = _id;
//       // await object.save();
//       res.status(200).send(object);h
//       console.log('res', object);
//       res.status(200).json({message: `${profileString} updated`})
//     } 
//   //  catch (error) {
//   //   res.status(500).json({ error: error.message })
//   // };
// };


exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};