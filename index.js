const AWS = require("aws-sdk")
const KEY_ID = "add your KEY_ID"
const SECRET_KEY = "add your SECRET_KEY"
const fs = require("fs")
const BUCKET_NAME = "add your image name";
const AWS_Filename = 'add your file';

const s3 = new AWS.S3({
      accessKeyId: KEY_ID,
      secretAccessKey: SECRET_KEY,
});

const params = {
  Bucket: BUCKET_NAME
}

const create_Bucket = (params) =>{
  s3.createBucket(params,(err, data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("Bucket Created successfully", data.Location);
    }
})
}

const uploadFile = (filename) =>{
  const fileContent = fs.readFileSync(filename);

  const params = {
    Bucket: BUCKET_NAME,
    Key: 'photo.jpg',
    Body: fileContent,
    ContentType: "image/JPG"
  }

  s3.upload(params,(err, data) =>{
    if(err){
      console.log(err);
    }
    else{
      console.log("Bucket Created successfully", data.Location);
    }
  })
}

function main() {
  create_Bucket(params);
  uploadFile(AWS_Filename);
}

main();
