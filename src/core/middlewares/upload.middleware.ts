import multer from "multer";
import {ErrorException} from "../exceptions/error.exception.js";


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        const [originalName, extension] = file.originalname.split(".");
        const filename = `${originalName}_${Date.now()}.${extension}`;
        callback(null, filename);
    }
});

const fileFilter: multer.Options['fileFilter'] = (req, file, callback) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedTypes.includes(file.mimetype)) {
        callback(new ErrorException("Ruxsat berilmagan fayl turi jo'natildi", 401));
    } else {
        callback(null, true);
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});