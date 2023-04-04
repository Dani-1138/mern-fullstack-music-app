const router = require("express").Router();

router.get("/home", (req, res)=> {
    return res.json(" this is home page")
})

module.exports = router;