// import { createStore } from 'vuex';
// import { ItemsStateInterface } from '@/models/store/items/ItemsState.interface';
// import { ItemInterface } from '@/models/items/Item.interface';
// import apiClient from '@/api-client';

// const state: ItemsStateInterface = {
//   loading: false,
//   items: [],
// };

// export default createStore({
//   state: state,
//   getters: {},
//   mutations: {
//     loadingItems(state: ItemsStateInterface) {
//       state.loading = true;
//       state.items = [];
//     },
//     loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
//       state.items = items;
//       state.loading = false;
//     },
//     selectedItem(
//       state: ItemsStateInterface,
//       params: { id: number; selected: boolean },
//     ) {
//       const { id, selected } = params;
//       const item = state.items.find((o: { id: number }) => o.id === id);
//       if (item) {
//         item.selected = selected;
//       }
//     },
//   },
//   actions: {
//     loadItems({ commit, state }) {
//       commit('loadingItems');

//       setTimeout(() => {
//         apiClient.items.fetchItems().then((data: ItemInterface[]) => {
//           commit('loadedItems', data);
//         });
//       }, 1000);
//     },

//     selectItem({ commit }, params: { id: number; selected: boolean }) {
//       commit('selectedItem', params);
//     },
//   },
//   modules: {},
// });

export * from './root';
