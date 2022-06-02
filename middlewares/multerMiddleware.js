const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/images/avatars')
    },

    filename: (req, file, callback) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        callback(null, fileName)
    }
})

const uploadFile = multer ({storage})

module.exports = uploadFile;