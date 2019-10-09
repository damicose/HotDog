const express = require("express");

const router = express.Router();

const hotdog = require(__dirname + "../models/hotdogs.js");

router.get(__dirname + "/", function(req, res) {
    hotdog.selectAll(function(data) {
      const hbsObject = {
        hotdogs: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post(__dirname + "/api/hotdogs", function(req, res) {
    hotdog.insertOne([
      "name", "sleepy"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put(__dirname + "/api/hotdogs/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    hotdog.updateOne({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;