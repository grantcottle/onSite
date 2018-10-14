const express = require('express');
const router = express.Router();

// Companies Model

const Company = require('../../models/Company');

router.get('/test', (req, res) => res.json({msg: "Companies works"}));


// @route GET api/companies
// @desc Get ALl Companies
// @access Public

router.get('/', (req, res) => {
    Company.find()
    .sort({ date: -1})
    .then(company => res.json(company))
});

// @route POST api/companies
// @desc Create A Company
// @access Public

router.post('/', (req, res) => {
    const newProperty = new Company({
        name: req.body.name
    });

newProperty.save().then(company => res.json(company));

});

// @route DELETE api/companies
// @desc Delete a Company
// @access Public

router.delete('/:id', (req, res) => {
    Company.findById(req.params.id)
    .then(company => company.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;