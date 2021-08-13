import express, { json, urlencoded } from "express";
import cors from "cors";
import routes from '../routes/router';
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
app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});