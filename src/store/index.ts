import { createStore } from 'vuex';
import { ItemsStateInterface } from '@/models/store/ItemsStateInterface';
import { ItemInterface } from '@/models/items/Item.interface';

const state: ItemsStateInterface = {
  loading: false,
  items: [],
};

export default createStore({
  state: state,
  getters: {},
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      state.loading = true;
      state.items = [];
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items;
      state.loading = false;
    },
    selectedItem(
      state: ItemsStateInterface,
      params: { id: number; selected: boolean },
    ) {
      const { id, selected } = params;
      const item = state.items.find((o) => o.id === id);
      if (item) {
        item.selected = selected;
      }
    },
  },
  actions: {
    loadItems({ commit, state }) {
      commit('loadingItems');
      const mockItems: ItemInterface[] = [
        {
          id: 1,
          name: 'Item 1',
          selected: false,
        },
        {
          id: 2,
          name: 'Item 2',
          selected: false,
        },
        {
          id: 3,
          name: 'Item 3',
          selected: false,
        },
      ];
      setTimeout(() => {
        commit('loadedItems', mockItems);
      }, 1000);
    },

    selectItem({ commit }, params: { id: number; selected: boolean }) {
      commit('selectedItem', params);
    },
  },
  modules: {},
});
