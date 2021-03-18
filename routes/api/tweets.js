const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Tweet.js');
const validateTweetInput = require('../../validation/tweets.js');

router.get('/test', (req, res) => {
  res.json({ msg: 'This is the tweets route' });
});

// retrieve all tweets
router.get('/', (req, res) => {
  Tweet.find()
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});

// retrieve a single user's tweets
router.get('/user/:user_id', (req, res) => {
  Tweet.find({ user: req.params.user_id })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found from that user' }));
});

// retrieve individual tweets
router.get('/:id', (req, res) => {
  Tweet.findById(req.params.id)
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: 'No tweets found with that ID' }));
});

// protected route for a user to post tweets
router.post('/',
  passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);

    if (!isValid) {
      return res.status(404).json(errors);
    }

    const newTweet = new Tweet({
      text: req.body.text,
      user: req.user.id
    });

    newTweet.save()
      .then(tweet => res.json(tweet))
      .catch(err => console.log(err));
});

module.exports = router;