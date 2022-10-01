const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const postComment = await Comment.create({
      comment: req.body.comment,
      comment_created_date: new Date(),
      comment_creator_id: req.session.userId,
      post_id: req.body.post_id,
    });
    res.status(200).json(postComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
