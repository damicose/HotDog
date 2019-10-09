const orm = require(__dirname + "../config/orm.js");

const hotdog = {
    selectAll: function(cb) {
      orm.selectAll("hotdogs", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("hotdogs", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("hotdogs", objColVals, condition, function(res) {
        cb(res);
      });
    }
};

module.exports = hotdog;