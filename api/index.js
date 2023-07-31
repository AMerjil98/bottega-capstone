const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const Post = require('./models/Post');
const app = express();
const fs = require('fs');

app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());

mongoose.connect('mongodb+srv://blog:N6fsuob5vAGoHiqM@cluster0.c2ehsy8.mongodb.net/?retryWrites=true&w=majority');

app.post('/post', async (req,res) => {
  const {title,summary,content} = req.body;
  const postDoc = await Post.create({
    title,
    summary,
    content,
  });
  res.json(postDoc);
});

app.put('/post', async (req,res) => {
  const {id,title,summary,content} = req.body;
  const postDoc = await Post.findById(id);
  await postDoc.findOneAndUpdate({
    title,
    summary,
    content,
  });
  res.json(postDoc);
});

app.get('/post', async (req,res) => {
  res.json(
    await Post.find()
      .sort({createdAt: -1})
      .limit(20)
  );
});

app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id);
  res.json(postDoc);
});

app.listen(4000);
//