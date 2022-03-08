import { createStore, StoreOptions } from 'vuex';
import { RootStateInterface, RootStoreModel } from '@/models/store';
import { initialRootState } from './initialState';
// import { itemsState } from '@/store/items/module';
import { itemsState } from '../items/module';

const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState,
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
