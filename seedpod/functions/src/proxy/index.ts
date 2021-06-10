import * as express from 'express';
// import * as request from 'request';
const request = require('request')
const cookieParser = require('cookie-parser')();

const proxy = express();

const cors = require('cors')({origin: true});
proxy.use(cors);
proxy.use(cookieParser);
proxy.use(require('body-parser').raw({type: '*/*'}));

proxy.get('*', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        const targetURL = req.query.url;
        if (!targetURL) {
            res.status(500).send({ error: 'There is no Target-Endpoint header in the request' });
            return;
        }
        request({ url: targetURL, method: req.method },
            function (error: any, response: any, body: any) {
                if (error) {
                    console.error('error: ' + response.statusCode)
                }
            }).pipe(res);
    }
});

export default proxy;
