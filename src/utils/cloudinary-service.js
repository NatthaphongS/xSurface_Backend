const cloudinary = require('../config/cloudinary');

exports.cloudinaryUpload = async (fileBuffer, fileName) => {
  const fileBase64 = `data:image/${fileName
    .split('.')
    .pop()};base64,${fileBuffer.toString('base64')}`;

  try {
    const result = await cloudinary.uploader.upload(fileBase64, {
      public_id: fileName,
    });

    return result.secure_url;
  } catch (error) {
    throw new Error(`Failed to upload to Cloudinary: ${error.message}`);
  }
};
