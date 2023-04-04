const express = require("express")
const app = express();
require("dotenv/config")
const bodyParser = require('body-parser')
const cors = require("cors");
const {default : mongoose, modelNames} = require("mongoose")

app.use(cors({origin : true}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    return res.json("Habesha Music")
})

const userRout = require("./routes/home");
app.use("/api/users/", userRout);

// Artist routes
const artistsRout = require("./routes/artists");
app.use("/api/artists/", artistsRout);
// album
const albumsRout = require("./routes/albums");
app.use("/api/albums/", albumsRout);
// song
const songsRout = require("./routes/songs");
app.use("/api/songs/", songsRout);

mongoose.connect(process.env.DATABASE, {useNewUrlParser : true});
mongoose.connection
.once("open", ()=> console.log("connected"))
.on("error", (error) => {
    console.log(`Error : ${error}`);
})



app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(4000,()=> console.log("listen to port 4000"));
