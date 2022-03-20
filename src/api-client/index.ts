import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import apiMockClient from './mock';
import apiLiveClient from './live';
import { config } from '@/config';

let apiClient: ApiClientInterface;

if (config.apiClient.type === 'live') {
  apiClient = apiLiveClient;
} else if (config.apiClient.type === 'mock') {
  apiClient = apiMockClient;
} else {
  throw Error('Invalid or unefined confg.apiClient.type');
}

export default apiClient;
