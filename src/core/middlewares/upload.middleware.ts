import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        const [originalName, extension] = file.originalname.split(".")
        const filename = `${originalName}_${extension}`;
        callback(null, file.originalname)
    }
});


const fileFilter: multer.Options['fileFilter'] = (req, file, callback)=> {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]
    if(!allowedTypes.includes(file.mimetype)){
        callback(new Error("Ruhsat berilmagan fayl turi jonatildi"));
    } else{
        callback(null, true)
    }
};

export const upload = multer({
    storage, 
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});
