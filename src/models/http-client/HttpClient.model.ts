import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { config } from '@/config';

import { HttpRequestParamsInterface } from './HttpRequestParams.interface';
import { HttpClientInterface } from './HttpClient.interface';

/**
 * @name HttpClient
 * @description
 * Wrapper for functional HTTP-client allows to avoid straight use external npm-package(eg. axios)
 * and simplifies replacement in the future
 */

export class HttpClientModel implements HttpClientInterface {
  private getToken(): string {
    const TOKEN_KEY = config.httpClient.tokenKey || 'myapp-token';

    const token = localStorage.getItem(TOKEN_KEY) || '';
    console.log(token);
    return token;
  }

  constructor() {
    //
  }

  get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters;

      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken) {
        const token = this.getToken();
        options.headers!.RequestVerificationToken = token;
      }

      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((response: AxiosResponse) => {
          console.info('----rejecting----');
          reject(response);
        });
    });
  }
  post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters;

      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken) {
        const token = this.getToken();
        options.headers!.RequestVerificationToken = token;
      }

      axios
        .post(url, payload, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((response: AxiosResponse) => {
          reject(response);
        });
    });
  }
}
