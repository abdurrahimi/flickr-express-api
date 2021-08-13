import express, { json, urlencoded } from "express";
import cors from "cors";
import FlickrController from '../controller/FlickrController';
const app = express();


let whiteList = [
    'http://localhost:5000'
];


let corsOption = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by cors"));
        }
    }
}

app.use(cors(corsOption));


app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        author: "Abdur Rahimi"
    });
});



const flickr = new FlickrController;
app.get('/test', flickr.getPublicPhoto);


const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});