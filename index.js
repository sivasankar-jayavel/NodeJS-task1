const express = require("express");
const app = express()
app.use(express.json())

//current date and time
const dt = Date.now();
console.log(dt);

const date_obj = new Date(dt);
console.log(date_obj);

const date = date_obj.getDate();
console.log(date);

const month = date_obj.getMonth() + 1;
console.log(month);

const year = date_obj.getFullYear();
console.log(year);

const time = date_obj.getTime();
console.log(time);

const fileName = year + "-" + month + "-" + date + "-" + time;
console.log(fileName);

//content
const timestamp = new Date().toISOString();
console.log(timestamp);

//file
const fs = require("fs");
fs.writeFile(`${fileName}.txt`, timestamp, function (err) { console.log("success") });

//read file
let files = [];
fs.readdir("./", function (err, list) { files.push(list) })

//api endpoint
app.get("/", (req, res) => {
    res.json({ Files: { files } });
});

// Portal Running 
app.listen(3000,function(){
    console.log("Server Started On Port 3000 ");
});