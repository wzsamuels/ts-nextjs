import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const BUCKET = "ts-website-images";

export function listObjects({bucket}) {
  return new Promise((resolve, reject) => {
    let response = {};
    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects({Bucket: BUCKET}, function (err, res) {
      if (err) {
        if (err) {
          reject(null)
          throw err;
        }
      }
      let href = this.request.httpRequest.endpoint.href;
      response.bucketUrl = href + BUCKET + '/';
      response.images = res.Contents;
      console.log(response)
      resolve(response)
    });
  })
}

export function getObject() {
  return new Promise((resolve, reject) => {
    let response = {};
    // Call S3 to obtain a list of the objects in the bucket
    let urlReturn = s3.getSignedUrl('getObject', {
      "Bucket": "ts-website-images",
      "Key": "lemons/spice.jpg",
      //  "ContentType": fileType
    });
    console.log(response)
    resolve(response)
  });
}

export function deleteObject(key) {
  return new Promise((resolve, reject) => {
    s3.deleteObject({Bucket: BUCKET, Key: key}, (err, res) => {
      if (err) {
        reject(null)
        throw err;
      }
      console.log(res);
      resolve(res);
    });
  });
}

export function putObject(key) {
  return new Promise((resolve, reject) => {
    s3.putObject({Bucket: BUCKET, Key: key}, (err, res) => {
      if (err) {
        reject(null)
        throw err;
      }
      console.log(res);
      resolve(res);
    });
  });
}