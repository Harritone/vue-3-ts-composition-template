import {
  ItemsApiClientInterface,
  ItemsApiClientModel,
  ItemsApiClientUrlsInterface,
} from '@/models/api-client/itmes';

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json',
};

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls);

export default itemsApiClient;
