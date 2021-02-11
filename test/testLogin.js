const axios = require('axios');
const express = require('express');

const app = express();

const clientId = 'bfa4d04d5d2a49832177';
const clientSecret = '8d814e81b011b0d395f6347169cfc4cb561747e0';

let token = null;

async function getToken() {
    app.get('/', (req, res) => {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
    });

    app.listen(3000);
    console.log('App listening on port 3000');

    app.get('/oauth-callback', (req, res) => {
        const body = {
            client_id: clientId,
            client_secret: clientSecret,
            code: req.query.code
        };
        const opts = { headers: { accept: 'application/json' } };
        axios.post(`https://github.com/login/oauth/access_token`, body, opts).
        then(res => res.data['access_token']).
        then(_token => {
            token = _token;
            console.log('My token:', token);
            res.json({ ok: 1 });
        }).
        catch(err => res.status(500).json({ message: err.message }));
    });
}

async function makeAction(token) {
    app.get('/', (req, res) => {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`);
    });

    axios.get('https://api.github.com/as-balakirev/atm_webservices')
        .then(res => res.data);

    axios.patch(`https://api.github.com/as-balakirev/atm_webservices`, {
        name: 'TEST name',
        description: 'TEST description',
    }, { headers: { authorization: `token ${token}` } })
        .then(result => console.log(result));
}

getToken().then(() => console.log('end'));


