import * as express from "express";
import {Application} from "express";

const bodyParser = require('body-parser');

const app: Application = express();
const port: number = 8181;

app.listen(port, "localhost", function (err: any) {
    if (err) return err;
    console.info(`Server running on : http://localhost:${port}`);

    app.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        next();
    });



    app.route('/tournament').get((req, res) => {

        var fs = require('fs');
        fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                let obj = JSON.parse(data); //now it an object
                res.send(obj);
            }
        });
    });

    app.use(bodyParser.json());
    app.route('/tournament/').post((req, res) => {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS'); // If needed
        // res.setHeader('Access-Control-Expose-Headers', 'Content-Length, X-JSON'); // If needed
        // res.setHeader('Access-Control-Allow-Headers', '*'); // If needed
        // res.setHeader('Access-Control-Allow-Credentials', true); // If needed




        var fs = require('fs');
        fs.writeFile('myjsonfile.json', JSON.stringify(req.body), 'utf8');
        res.sendStatus(201);
        // next();
    });
});


