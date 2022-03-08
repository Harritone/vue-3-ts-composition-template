import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel,
} from '@/models/api-client/itmes';

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json',
};

const itemsApiClient = new ItemsApiClientModel(urls);

export default itemsApiClient;
