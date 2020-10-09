const express = require('express')
const app = express();
require('dotenv').config();
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'), function (err) {
            if (err) {
                console.log(err);
                res.status(500).send(err)
            }
        })
    }) 
}

app.post('/webhook', (req, res) => {  
 
    let body = req.body;
  
    // Check