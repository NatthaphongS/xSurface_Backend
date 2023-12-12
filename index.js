require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const uploadMiddleWare = require('./src/middleware/uploadmulter');
const { connect } = require('./src/mongodb/mongodb.connect');
const productController = require('./src/controller/product-controller');

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
connect();

app.get('/product', productController.getProduct);
app.post(
  '/product/create',
  uploadMiddleWare.array('images[]'),
  productController.createProduct
);
app.delete('/product/delete/:id', productController.deleteProduct);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({ message: err.message });
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server is on port:${PORT}`));
