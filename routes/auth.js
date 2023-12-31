const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// REGISTER NEW USERS

router.post("/register", async (req, res) => {
  try {
    // hash or encrypt users password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user with hashed password
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// LOGIN USERS

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(404).send("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("incorrect password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/update", async (req, res) => {
  try {
    // hash or encrypt users password
    const user = await User.findById(req.params.id);

    // create new user with hashed password
    await user.updateOne({ country: req.body.country });
    await user.updateOne({ level: req.body.level });
    await user.updateOne({ college: req.body.college });
    await user.updateOne({ state: req.body.state });
    await user.updateOne({ school: req.body.school });
    await user.updateOne({ department: req.body.department });

    // save user and return response
    const updateUser = await User.findById(req.params.id);

    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
