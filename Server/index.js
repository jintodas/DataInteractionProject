import express from 'express';
import fs from 'fs';
import mongodb from "mongodb";
import cors from "cors";

// connecting mongodb to local host
const  mongoClient = new mongodb.MongoClient("mongodb://localhost:27017");
const PORT = 8000;

// conneting client the database (mongodb)
mongoClient.connect();
// Connecting to Pixart-api
const db = mongoClient.db("pixArt-api");
// Picking out photo collection
const collection = db.collection("photoGallery")
const app = express();

app.use(
    cors({
         origin:"http://localhost:3000",
    })
);
app.use(express.json());
//const database = [];
//database.push(portrait);


app.post("/photoGallery", async(req, res) => {
    const portraitPhoto= req.body;
    await collection.insertOne(portraitPhoto);
    res.status(200).end();
});


app.get("/photoGallery", async(req, res) => {
const query = req.query;

let filter ={};
if(query.Type){
    filter.Type =-query.Type ==="true";
} if(query.Description){
filter.Description = {$reges: new RegExp(query.Description, "i")};
}

const photoGallery = await collection.find({});
 res.json(photoGallery);

});


app.delete("/photoGallery/:selectedPhoto", async(req, res) =>{
    const selectedPhoto = req.params.selectedPhoto;
    app.use(express.json());


    await collection.deleclteOne({"_id" : selectedPhoto});
    res.status(200).end();

    const photoExists = documentCount ===1;
    if (photoExists){
        await collection.deleteOne({_id:selectedPhoto});
        res.sendStatus(200);
    }else{
        res.sendStatus(404);
    }
});

app.listen(PORT, ()=>{
    console.log(`pixArt is running at localhost:${PORT}`)
});
