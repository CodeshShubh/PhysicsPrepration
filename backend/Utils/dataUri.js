import dataUri from 'datauri/parser.js'

import path from 'path';

const getDataUri = (file)=>{
    const parser = new dataUri();

    const extName = path.extname(file.originalname).toString();

    return parser.format(extName, file.buffer)
}

export default getDataUri;


// import DataURIParser from "datauri/parser";
// import path from 'path'


// const parser = new DataURIParser();

// export const getDataUri = (file)=>{
    
//     const extName = path.extname(file.originalname).toString() // this will give .png like data of extension of file

//     const datauri = parser.format(extName, file.buffer)
//     return datauri
// }