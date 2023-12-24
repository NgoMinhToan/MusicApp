const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config()
const cors = require('cors');

const postgresql_db = require('./postgresql');
const cloudinaryUpload = require('./cloudinary');

const app = express();
app.use(cors());


// Cấu hình multer để lưu file vào thư mục uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Thư mục lưu trữ file
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename); // Đổi tên file khi lưu vào thư mục
    },
});

const upload = multer({ storage: storage });

// Route GET /upload
app.get(['/upload', '/'], (req, res) => {
    res.sendFile(path.join(__dirname, 'upload.html'));
});


const deleteAudio = (imagePath) => {
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('File does not exist.');
            return;
        }

        // File exists, so delete it
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Error deleting the file:', err);
                return;
            }
            console.log('File deleted successfully.');
        });
    });
}

// Định nghĩa route cho việc upload file âm thanh
app.post('/upload', upload.single('audioFile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('Không có file được chọn');
    }

    const filePath = req.file.path;
    
    try {
        const cloudinaryResult = await cloudinaryUpload(filePath);
        console.log(cloudinaryResult)
        
        deleteAudio(filePath)

        const fileName = req.body.name || req.file.originalname;
    
        const db_res = await postgresql_db.none('INSERT INTO musics(id, name, cloudinary_id) VALUES($1, $2, $3)', [generateRandomId(50), fileName, cloudinaryResult.public_id])
        console.log(db_res)

        const returnObject = {
            message: 'File uploaded successfully',
            fileName: fileName,
            cloudinaryResult: cloudinaryResult,
            db_result: db_res,
        }
        
        res.send(JSON.stringify(returnObject));
    } catch (error) {
        res.send(JSON.stringify(eror));
    }

});

// Đường dẫn tới thư mục uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







function generateRandomId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}