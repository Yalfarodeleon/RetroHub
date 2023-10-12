const post = require("../models/postModel.js");

//get posts

//get single post

//create post
const createPost = async(req, res) => {
    const {post_id, post_title, post_content, post_author} = req.body;

    try{
        const new_post = await post.create({post_id, post_title, post_content, post_author})
        res.status(200).json(post)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}
//delete post

//edit post

module.exports = {
    createPost
}