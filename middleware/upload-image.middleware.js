const multer = require("multer");

const uploadImageSingle = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images/avatar");
    }, // đường dẫn thư mục để lưu file
    filename: (req, file, cb) => {
      // cb(null, `${Date.now()}_${file.originalname}`);
      cb(null, Date.now() + "_" + file.originalname);
    },
  });

  const upload = multer({ storage });
  return upload.single("avatar");
};
module.exports = {
  uploadImageSingle,
};
