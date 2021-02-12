require('dotenv').config()
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');
const Call_API_SID_Token = 'ACde8251b956b7958116ec3c1b59d41790';
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    try {
        let response = await axios({
            method: 'post',
            url: `https://api.teleapi.net/call/2012-04-24/Accounts/${Call_API_SID_Token}/Calls.json`,
            data: `{
                From: '19174269335',
                To: '19174269339',
                Url: 'https://api.teleapi.net/rcml/fourscore.xml',
            }`,
            headers: {
                Authorization: `Basic ZjhjYTA2N2YtNjc0Mi00OGVmLTg4NjgtZjMyNWE1MzczZDhkOkFDZGU4MjUxYjk1NmI3OTU4MTE2ZWMzYzFiNTlkNDE3OTA=`,
            }
        });
        console.log(response.data);
        res.send('Yahoo!');
    } catch (e) {
        console.error(e);
    }
})

module.exports = router;