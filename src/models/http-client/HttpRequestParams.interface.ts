/**
 * @name HttpRequestParamsInterface
 * @description
 * Parameters for GET/POST/PUT request in HttpClient
 */

export interface HttpRequestParamsInterface {
  url: string;
  requiresToken: boolean;
  payload?: any;
}
