const ProductModel = require('../model/product.model');
const { cloudinaryUpload } = require('../utils/cloudinary-service');
const fs = require('fs/promises');

const uploadMany = async (filesArr) => {
  const promises = [];
  for (const file of filesArr) {
    promises.push(cloudinaryUpload(file.buffer, file.originalname));
  }
  const imagesUrl = await Promise.all(promises);
  return imagesUrl;
};

exports.createProduct = async (req, res, next) => {
  try {
    // console.log(req.body);
    // console.log(req.body.images);
    const product = new ProductModel({
      name: req.body.name,
      code: req.body.code,
      price: req.body.price,
    });
    // console.log(req.files);
    product.images = await uploadMany(req.files);

    const result = await product.save();
    res.status(201).json({ result });
  } catch (error) {
    next(error);
    // } finally {
    //   for (const file of req.files) {
    //     fs.unlink(file.path);
    //   }
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await ProductModel.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res
      .status(200)
      .json({ message: 'Product deleted successfully', deleteProduct });
  } catch (error) {
    next(error);
  }
};
