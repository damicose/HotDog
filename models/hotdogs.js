const orm = require("../config/orm.js");

const hotdog = {
    selectAll: function(cb) {
      orm.all("hotdogs", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.create("hotdogs", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.update("hotdogs", objColVals, condition, function(res) {
        cb(res);
      });
    }
};

module.exports = hotdog;