const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a new post
router.post("/", (req, res) => {
  if(!req.body.title || req.body.title.length < 3){
    //400 bad request
    res.status(400).send("At least 3 Characters");
    return;
  }

  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

//Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a Post
router.delete("/:postId", async (req, res) => {
  try {
    const removed = await Post.remove({ _id: req.params.postId });
    res.json(removed);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const update = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(update);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
