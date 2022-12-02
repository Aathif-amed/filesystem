const express = require("express");
const fs = require("fs");
const cors = require("cors")

const app = express();

const currrentTime =new Date();
console.log(currrentTime.toLocaleDateString());
console.log(currrentTime.toLocaleTimeString());

app.use(
  cors({
    origin: "*",
  })
  );
  
  app.use(express.json());
app.get("/",(req,res)=>{
res.send("welcome");
})

app.get("/file", (req, res) => {
  fs.writeFile(`./timestamps/${Date.now()}.txt`, `Time:${currrentTime.toLocaleTimeString()}\n Date:${currrentTime.toLocaleDateString()}`, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Completed writing !");
    res.send(`Created ${Date.now()}.txt`);
  });
});

app.get("/read", async (req, res) => {
  fs.readdir(`./timestamps`, "utf-8", (err, datas) => {
    if (err) {
      console.log(err);
    }
    // console.log(Object.keys(data));
    // let files=data.split(",")
    // console.log(files);

    res.send(`Number of files in the directory :  ${datas.length}\n Files list : ${datas}`);
  });
});

app.listen(process.env.PORT || 3004);
