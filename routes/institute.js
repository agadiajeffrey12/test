const router = require("express").Router();
const Institutions = require("../models/institution");

router.post("/create", async (req, res) => {
  try {
    const newInstitute = new Institutions({
      institution: req.body.institution,
    });
    const institute = await newInstitute.save();
    res.status(200).json(institute);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

router.put("/:id/findone", async (req, res) => {
  try {
    const institute = await Institutions.findById(req.params.id);
    await institute.updateOne({ $push: { courses: req.body.courses } });
    await institute.updateOne({ $push: { levels: req.body.levels } });
    await institute.updateOne({ $push: { college: req.body.college } });
    const updatedInstitute = await Institutions.findById(req.params.id);
    res.status(200).json(updatedInstitute);
  } catch (err) {
    res.status(500).json(err);
  }
});
