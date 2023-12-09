require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const uploadMiddleWare = require('./middleware/upload');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express());
app.use(express.json());
app.use(express.static('public'));

app.post('/product/create', uploadMiddleWare.single('image'));

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server is on port:${PORT}`));
