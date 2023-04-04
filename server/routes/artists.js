const artist = require("../models/artist");
const express = require("express")
const router = require("express").Router();

router.post('/addCar', (req, res)=>{
  console.log(req.body)
  const addson = new artist({
    name: req.body.name,
    imageURL: req.body.imageURL,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
  })
  addson.save().then((err,doc)=>{
      if(err) return console.log(err)
      res.status(200).json(doc)
  })
})


router.get("/getAll", async (req, res) => {
  const options = {
    // sort returned documents in ascending order
    sort: { name: 1 },

  };

  const cursor = await artist.find(options);
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(200).send({ success: false, msg: "No Data Found" });
  }
});

router.get('/get-all', (req, res)=> {
  artist.find().then((result)=>{
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })
})

router.get('/add-artists',(req,res)=>{
  const data = {
		title: 'Don William',
		imageURL: 'http://don',
		twitter: 'don.twitter',
    instagram: "don.instagram"
	}
	const blog = new artist(data);
	blog.save().then((result) => {
		res.send(result);
	}).catch((err) =>{
		console.log(err);
	})
})

router.get("/getOne/:getOne", async (req, res) => {
  const filter = { _id: req.params.getOne };

  const cursor = await artist.findOne(filter);

  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(200).send({ success: true, msg: "No Data Found" });
  }
});

router.get('/single-blog',(req,res)=>{
	Blog.findById('5fcc5533d6fc7a16db842ef9')
	.then((result)=>{
		res.send(result);
	})
	.catch((err)=>{
		console.log(err);
	})
})


// router.post("/save", async (req, res) => {
//   const newArtist = artist({
//     name: req.body.name,
//     imageURL: req.body.imageURL,
//     twitter: req.body.twitter,
//     instagram: req.body.instagram,
//   });
//   try {
//     const savedArtist = await newArtist.save();
//     res.status(200).send({ artist: savedArtist });
//   } catch (error) {
//     res.status(400).send({ success: false, msg: "error "});
//   }
// });

router.put("/update/:updateId", async (req, res) => {
  const filter = { _id: req.params.updateId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await artist.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
      },
      options
    );
    res.status(200).send({ artist: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:deleteId", async (req, res) => {
  const filter = { _id: req.params.deleteId };

  const result = await artist.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data Deleted" });
  } else {
    res.status(200).send({ success: false, msg: "Data Not Found" });
  }
});

module.exports = router;
