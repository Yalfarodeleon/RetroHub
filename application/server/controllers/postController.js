const post_format = require("../models/postModel.js");
const mongoose = require("mongoose");

//get posts
const getPosts = async(req, res) => {
    const posts = await post_format.find({}).sort({createdAt: -1})
    res.status(200).json(posts)
}
//get single post
const getPostByID = async(req, res) => {
    const {id} = req.params
    const post = await post_format.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "post ID not found"})
    }
    if(!post){
        res.status(404).json({error: "post ID not found"})
    }
}
//create post
const createPost = async(req, res) => {
    const {post_id, post_title, post_content, post_author} = req.body;

    try{
        const new_post = await post_format.create({post_id, post_title, post_content, post_author})
        res.status(200).json(post)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}
//delete post

//edit post

module.exports = {
    getPosts,
    getPostByID,
    createPost
}