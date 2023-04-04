const song = require("../models/song");

const router = require("express").Router();

// router.get("/getAll", async (req, res) => {
//   const options = {
//     // sort returned documents in ascending order
//     sort: { createdAt: 1 },
//     // Include only the following
//     // projection : {}
//   };

//   const cursor = await song.find(options);
//   if (cursor) {
//     res.status(200).send({ success: true, data: cursor });
//   } else {
//     res.status(200).send({ success: true, msg: "No Data Found" });
//   }
// });

router.get('/get-all', (req, res)=> {
  song.find().sort({name : 1}).then((result)=>{
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })
})

router.get('/get-recent', (req, res)=> {
  song.find().sort({createdAt : -1}).limit(10).then((result)=>{
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })
})

// router.post('/add-song',(req,res)=>{
//   const data = req.body;
//  const blog = new song(data);
//  blog.save().then((result) => {
//    res.send(result);
//  }).catch((err) =>{
//    console.log(err);
//  })
// })

router.get("/getOne/:getOne", async (req, res) => {
  const filter = { _id: req.params.getOne };

  const cursor = await song.findOne(filter);

  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(200).send({ success: true, msg: "No Data Found" });
  }
});

// router.post("/save", async (req, res) => {
//   const data = req.body;
//   const newSong = new song(data);
//   try {
//     const savedSong = await newSong.save();
//     res.status(200).send({ song: savedSong });
//   } catch (error) {
//     res.status(400).send({ success: false, msg: error });
//   }
// });


router.put("/update/:updateId/:updateFavor", async (req, res) => {
  const filter = { _id: req.params.updateId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await song.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
        songUrl: req.body.songUrl,
        album: req.body.album,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
        favorite: req.params.updateFavor,
      },
      options
    );
    res.status(200).send({ artist: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.put("/editName/:editId/:newName", async (req, res) => {
  const filter = { _id: req.params.editId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await song.findOneAndUpdate(
      filter,
      {
        name: req.params.newName,
        imageURL: req.body.imageURL,
        songUrl: req.body.songUrl,
        album: req.body.album,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
        favorite: req.body.favorite,
      },
      options
    );
    res.status(200).send({ artist: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});


router.post('/addCar', (req, res)=>{
  console.log(req.body)
  const addson = new song({
      name: req.body.name,
      imageURL: req.body.imageURL,
      songUrl: req.body.songUrl,
      album: req.body.album,
      artist: req.body.artist,
      language: req.body.language,
      category: req.body.category,
      favorite: req.body.favorite,
  })
  addson.save().then((err,doc)=>{
      if(err) return console.log(err)
      res.status(200).json(doc)
  })
})

router.delete("/delete/:deleteId", async (req, res) => {
  const filter = { _id: req.params.deleteId };

  const result = await song.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data Deleted" });
  } else {
    res.status(200).send({ success: false, msg: "Data Not Found" });
  }
});


router.get("/getFavouritesSongs", async (req, res) => {
  const query = req.query.songId;
  res.send(query);
});

module.exports = router;
