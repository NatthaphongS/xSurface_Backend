const multer = require('multer');
const { memoryStorage } = require('multer');

const storage = memoryStorage();

const uploadmulter = multer({ storage: storage });

module.exports = uploadmulter;
