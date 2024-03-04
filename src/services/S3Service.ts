import { S3 } from "aws-sdk";
import { S3Params } from "../types/S3Params";

export class S3Service {

  private s3;
  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
      region: process.env.EXPO_PUBLIC_AWS_REGION,
    });
  }
  
  
  async upload(params: S3Params) {
    return await this.s3.upload(params).promise();
  }
}