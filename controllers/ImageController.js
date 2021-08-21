const ImageModel = require('../models/ImageModel');

class ImageController {
    async getAllImages(req, res) {
        try {
            const images = await ImageModel.find();

            res.status(200).json(images);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async createImage(req, res) {
        const imageData = new ImageModel({ ...req.body });

        try {
            const newImage = await imageData.save();

            res.status(201).json(newImage);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

const imageController = new ImageController();
module.exports = (Object.freeze(imageController));