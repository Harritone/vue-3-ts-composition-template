import { HttpRequestParamsInterface } from './HttpRequestParams.interface';
/**
 * @name HttpClientInterface
 * @description
 * Wrapper interface for HttpClient
 */

export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>;
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>;
}
