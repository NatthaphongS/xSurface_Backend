const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log('------1');
    cb(null, 'public');
  },
  filename: (req, file, cb) => {
    // console.log('------2');
    const split = file.originalname.split('.');
    cb(
      null,
      '' +
        Date.now() +
        Math.round(Math.random() * 1000000) +
        '.' +
        split[split.length - 1]
    );
  },
});

const uploadmulter = multer({ storage: storage });

module.exports = uploadmulter;
