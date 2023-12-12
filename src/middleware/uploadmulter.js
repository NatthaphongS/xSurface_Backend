const multer = require('multer');

const storage = multer.memoryStorage();

const uploadmulter = multer({ storage: storage });

module.exports = uploadmulter;
