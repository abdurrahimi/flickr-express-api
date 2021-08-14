import axios from '../api/axios';

const FlickrController = {
    async searchPhotos(req, res) {
        if (req.params.keyword === undefined) return res.json({
            status: 401,
            msg: 'No keyword founds'
        });
        var path = `/rest/?method=flickr.photos.search&tags=${req.params.keyword}&format=json&nojsoncallback=1&per_page=10&page=${req.query.page}`;
        const response = await axios.get(path);
        res.json(response.data)
    },
    async getPublicPhoto(req, res) {
        var path = `/feeds/photos_public.gne?format=json&nojsoncallback=1&per_page=10&page=1`;
        if (req.query.keyword !== undefined || req.query.keyword != "") path += `&tags=${req.query.keyword}`;
        const response = await axios.get(path);
        res.json(response.data)
    }
}

export default FlickrController;