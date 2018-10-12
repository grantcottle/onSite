const express = require('express');
const router = express.Router();

// Users Model

const User = require('../../models/Users');

// @route GET api/users
// @desc Get ALl Users
// @access Public

router.get('/', (req, res) => {
    User.find()
    .sort({ date: -1})
    .then(user => res.json(user))
});

// @route POST api/users
// @desc Create A User
// @access Public

router.post('/', (req, res) => {
    const newProperty = new User({
        name: req.body.name
    });

newProperty.save().then(user => res.json(user));

});

// @route DELETE api/users
// @desc Delete a User
// @access Public

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;