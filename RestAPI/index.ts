import * as express from "express";
import {Application} from "express";

const bodyParser = require('body-parser');

const app: Application = express();
const port: number = 8181;

app.listen(port, "localhost", function (err: any) {
    if (err) return err;
    console.info(`Server running on : http://localhost:${port}`);

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

        var fs = require('fs');
        fs.writeFile('myjsonfile.json', JSON.stringify(req.body), 'utf8');


        res.send({'name': 'locura2'});
    });
});


