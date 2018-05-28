"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var port = 8181;
app.listen(port, "localhost", function (err) {
    if (err)
        return err;
    console.info("Server running on : http://localhost:" + port);
    app.route('/tournament').get(function (req, res) {
        var fs = require('fs');
        fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var obj = JSON.parse(data); //now it an object
                res.send(obj);
            }
        });
    });
    app.use(bodyParser.json());
    app.route('/tournament/').post(function (req, res) {
        var fs = require('fs');
        fs.writeFile('myjsonfile.json', JSON.stringify(req.body), 'utf8');
        res.send({ 'name': 'locura2' });
    });
});
//# sourceMappingURL=index.js.map