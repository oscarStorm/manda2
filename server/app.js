import express from "express";

const app = express();


app.get("/",(req, res) => {
    console.log("hello");
})




const PORT = 8080;

app.listen(PORT);