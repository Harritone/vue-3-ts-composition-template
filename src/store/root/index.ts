import { createStore, StoreOptions } from 'vuex';
import {
  RootStateInterface,
  RootStoreModel,
  StoreModuleNames,
  MutationType,
  ItemsStateInterface,
  LocalesStateInterface,
} from '@/models/store';
import { initialRootState } from './initialState';
import { itemsState } from '../items/module';
import { localesState } from '../locales/module';

const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState,
    localesState,
  },
};

export const rootStore: RootStoreModel<RootStateInterface> = <any>(
  createStore(storeOptions)
);

export function dispatchModuleAction<T>(
  moduleName: string,
  actionName: string,
  params?: T,
): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params);
}
