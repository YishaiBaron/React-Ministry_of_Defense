const path = require('path');
const fs = require('fs');  //fs = file system
const express = require('express');

const app = express();
const basePath = path.join(__dirname + "/dist");

//loop[ over all sub folders in  "/dist"
fs.readdir(basePath, (err, folders) => {
    folders.forEach((subFolder) => {

        //here we allow access to all files in the current folder
        app.use(express.static(`${basePath}/${subFolder}`));

        //here we add a new routing that returns a spefic project
        app.get(`/${subFolder}`, (req, res) => {
            res.sendFile(`${basePath}/${subFolder}/index.html`);
        });
    })
});


app.listen(process.env.PORT || 3500, () => { console.log(`OK`); });
