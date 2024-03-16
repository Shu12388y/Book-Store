import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECERT,
});

async function uploadFile(localpath) {
  try {
    if (!localpath) return null;
    const response = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localpath);
    return response.url;
  } catch (error) {
    fs.unlinkSync(localpath);
    return null;
  }
}

export default uploadFile;
