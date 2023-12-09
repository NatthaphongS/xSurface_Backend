const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(error) //บังคับเกิด error
    cb(null, 'public'); //เก็นในโฟลเดอร์ที่ชื่ public
  }, //where to keep file req=req.object,file=file that uplaod,cb =(error,)
  filename: (req, file, cb) => {
    console.log(file);
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

const upload = multer({ storage: storage });

module.exports = upload;
