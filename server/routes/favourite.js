const express = require('express');
const router = express.Router();
const { Favourite } = require("./../models/Model");

const { auth } = require("../middleware/auth");

//=================================
//             favourite
//=================================

router.post("/favouriteNumber", auth, (req, res) => {
    //Find favourite information inside favourite collection by mediaId

    Favourite.find({"mediaId": req.body.mediaId})
        .exec(( err, favourite ) => {
          if(err) return res.status(400).send(err)
          res.status(200).json({ success: true, favouriteNumber: favourite.length })
        })


});


router.post("/favourited", auth, (req, res) => {

    // Find Favourite information inside favourite collection by userId and movieId

  Favourite.find({"mediaId": req.body.mediaId, "userFrom": req.body.userFrom})
      .exec(( err, favourite ) => {
        if(err) return res.status(400).send(err)

        //how can we know if I favourited a movie or not?
        let result = false;
        if(favourite.length !== 0) {
          result = true
        }

        res.status(200).json({ success: true, favourited: result});
      })
});

router.post("/addToFavourite", auth, (req, res) => {
  //save informtation about the media and user into favourite collection

  console.log("LOL", req.body);

  const favourite = new Favourite(req.body);

  favourite.save((err, doc) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
});


router.post("/removeFromFavourite", auth, (req, res) => {
  //delete
  Favourite.findOneAndDelete({ mediaId: req.body.mediaId, userFrom: req.body.userFrom })
      .exec((err, doc) => {
        if(err) return res.status(400).json({success: false, err})
        res.status(200).json({ success: true, doc })
      })

});



module.exports = router;
