import { rootStore, dispatchModuleAction } from '../root';
import {
  MutationType,
  StoreModuleNames,
  LocalesStateInterface,
} from '@/models/store';
// import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys';

const localesStore = {
  get state(): LocalesStateInterface {
    return rootStore.state.localesState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params);
  },
};

export const useLocalesStore = () => {
  return localesStore;
};
