import { ItemInterface } from '../items/Item.interface';
/**
 * @name ItemsStateInterface
 * @description
 * Items state interface
 */

export interface ItemsStateInterface {
  loading: boolean;
  items: ItemInterface[];
}
