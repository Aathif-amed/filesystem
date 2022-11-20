const express = require("express");
const fs = require("fs");

const app = express();

const currrentTime = Date.now();

console.log(currrentTime);


app.get("/",(req,res)=>{
res.send("welcome");
})

app.get("/file", (req, res) => {
  fs.writeFile(`./timestamps/${currrentTime}.txt`, `${currrentTime}`, (err) => {
    console.log(err);
    console.log("Completed writing !!! 👍");
    console.log(currrentTime);
    res.send(`Created ${currrentTime}.txt`);
  });
});

app.get("/read", async (req, res) => {
  fs.readdir(`./timestamps`, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

app.listen(process.env.PORT || 3004);
