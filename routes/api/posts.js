const express = require('express');
const router = express.Router();

// Posts Model

const Post = require('../../models/Posts');

router.get('/test', (req, res) => res.json({msg: "Posts works"}));


// @route GET api/posts
// @desc Get ALl Posts
// @access Public

router.get('/', (req, res) => {
    Post.find()
    .sort({ date: -1})
    .then(post => res.json(post))
});

// @route POST api/posts
// @desc Create A Post
// @access Public

router.post('/', (req, res) => {
    const newProperty = new Post({
        name: req.body.name
    });

newProperty.save().then(post => res.json(post));

});

// @route DELETE api/posts
// @desc Delete a Post
// @access Public

router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;