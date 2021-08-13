import axios from '../api/axios';

class FlickrController {
    async getPublicPhoto(req, res) {
        if (req.query.s === undefined) return res.json({
            status: 401,
            msg: 'No keyword founds'
        });
        var path = `/?method=flickr.photos.search&tags=${req.query.s}&format=json&nojsoncallback=1&per_page=10&page=${req.query.page}`;
        const response = await axios.get(path);
        res.json(response.data)
    }
}

export default FlickrController;