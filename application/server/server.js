require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts.js");

const app = express();
app.use(cors());
app.use(postRoute);
app.use(express.json());

app.use((req,res,next)=> {
  console.log(req.path, req.method)
  next()
});

app.use("/api/posts",postRoute);

mongoose.connect(process.env.mongo_url)
  .then(() =>{
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server connected to mongo and is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

