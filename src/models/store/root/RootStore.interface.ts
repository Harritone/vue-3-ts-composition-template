import { ItemsStateInterface } from '../items/ItemsState.interface';
import { LocalesStateInterface } from '../locales/LocalesState.interface';

/**
 * @name RootStoreInterface
 * @description
 * Wraps together each store module interface in one place
 */

export interface RootStoreInterface {
  itemsState: ItemsStateInterface;
  localesState: LocalesStateInterface;
}
