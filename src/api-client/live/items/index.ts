import { config } from '@/config';
import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel,
} from '@/models/api-client/itmes';

const urls: ItemsApiClientUrlsInterface = config.items.apiUrls;

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls);

export default itemsApiClient;
