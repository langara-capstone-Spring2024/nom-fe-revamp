import { useMutation } from "@tanstack/react-query";
import { S3Service } from "../../S3Service";
import { S3Params } from "../../../types/S3Params";

export const UploadImage = () => {
  const s3Service = new S3Service();

  return useMutation({
    mutationFn: async (params: S3Params) => {
      const response = await s3Service.upload(params);
      return response.Location;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
  });
};
