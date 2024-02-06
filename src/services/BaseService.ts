import axios, { AxiosRequestConfig } from "axios";

export class BaseService {
  config: AxiosRequestConfig = {};
  private cancellationToken = axios.CancelToken.source();

  constructor() {
    this.config.cancelToken = this.cancellationToken.token;
  }

  cancelRequests() {
    this.cancellationToken.cancel("RequestCancellation");
  }
}
