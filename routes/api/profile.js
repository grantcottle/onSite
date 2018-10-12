const express = require('express');
const router = express.Router();

// Profiles Model

const Profile = require('../../models/Profiles');

// @route GET api/profiles
// @desc Get ALl Profiles
// @access Public

router.get('/', (req, res) => {
    Profile.find()
    .sort({ date: -1})
    .then(profile => res.json(profile))
});

// @route POST api/profiles
// @desc Create A Profile
// @access Public

router.post('/', (req, res) => {
    const newProperty = new Profile({
        name: req.body.name
    });

newProperty.save().then(profile => res.json(profile));

});

// @route DELETE api/profiles
// @desc Delete a Profile
// @access Public

router.delete('/:id', (req, res) => {
    Profile.findById(req.params.id)
    .then(profile => profile.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;