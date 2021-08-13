import { Router } from 'express';
import FlickrController from '../controller/FlickrController';
var router = Router();

/* GET home page. */
router.get("/", (req, res) => {
    res.json({
        author: "Abdur Rahimi"
    });
});

router.get('/public', FlickrController.getPublicPhoto);
router.get('/search/:keyword', FlickrController.searchPhotos);


export default router;
