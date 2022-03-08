import { ItemInterface } from '@/models/items/Item.interface';

/**
 * @name ItemsIpiClientInterface
 * @description
 * Interface for client API module Items
 */

export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>;
}
