import { ItemsApiClientInterface } from './itmes';
/**
 * @name ApiClientInterface
 * @description
 * Wrapper interface includes all API modules
 */

export interface ApiClientInterface {
  items: ItemsApiClientInterface;
}
