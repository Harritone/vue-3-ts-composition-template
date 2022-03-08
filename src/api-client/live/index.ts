import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import itemsApiClient from './items';

const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient,
};

export default apiLiveClient;
