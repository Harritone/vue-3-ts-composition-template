import { ItemsApiClientUrlsInterface } from '@/models/api-client/itmes';

export interface ConfigInterface {
  global: {
    //
  };
  httpClient: {
    tokenKey: string;
  };
  apiClient: {
    type: string;
  };
  items: {
    apiUrls: ItemsApiClientUrlsInterface;
  };
}
