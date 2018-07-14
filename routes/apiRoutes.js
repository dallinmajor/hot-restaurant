var tableData = require('../data/tableData');
var waitListData = require('../data/waitingListData');

module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        res.JSON(tableData);
    });
}