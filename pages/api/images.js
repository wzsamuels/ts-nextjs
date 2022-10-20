import AWS from "aws-sdk";

export default async function handler(req, res) {

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
  });

  const s3 = new AWS.S3({apiVersion: '2006-03-01'});

  const BUCKET = req.body.bucket;

  const response = await new Promise((resolve, reject) => {
    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects({Bucket: BUCKET}, function (err, res) {
      if (err) {
        if (err) {
          reject(null)
          throw err;
        }
      }
      let href = this.request.httpRequest.endpoint.href;
      const response = res.Contents.map(image =>
        s3.getSignedUrl('getObject', {
          "Bucket": BUCKET,
          "Key": image.Key,
          //  "ContentType": fileType
        })
      );
      resolve(response)
    });
  })
  res.status(200).json(response);
}