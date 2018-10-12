const express = require('express');
const router = express.Router();

// Properties Model

const Property = require('../../models/Properties');

// @route GET api/properties
// @desc Get ALl Properties
// @access Public

router.get('/', (req, res) => {
    Property.find()
    .sort({ date: -1})
    .then(property => res.json(property))
});

// @route POST api/properties
// @desc Create A Property
// @access Public

router.post('/', (req, res) => {
    const newProperty = new Property({
        name: req.body.name
    });

newProperty.save().then(property => res.json(property));

});

// @route DELETE api/properties
// @desc Delete a Property
// @access Public

router.delete('/:id', (req, res) => {
    Property.findById(req.params.id)
    .then(property => property.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;