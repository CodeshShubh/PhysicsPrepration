import multer from "multer";

const storage = multer.memoryStorage()

export const singleUpload = multer({storage}).single('file')




import dataUri from 'datauri';

export const getDataUri = (file)=>{
    const parser = new dataUri();


}