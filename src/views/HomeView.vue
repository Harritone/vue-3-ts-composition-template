<template>
  <div class="home">
    <ItemsListComponentVue
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import ItemsListComponentVue from '@/components/items/ItemsList.component.vue';
import { ItemInterface } from '@/models/items/Item.interface';
import { useItemsStore } from '@/store/items';
import { MutationType, StoreModuleNames } from '@/models/store';

export default defineComponent({
  name: 'HomeView',
  components: {
    ItemsListComponentVue,
  },
  setup() {
    const itemsStore = useItemsStore();
    const items = computed(() => {
      return itemsStore.state.items;
    });
    const loading = computed(() => {
      return itemsStore.state.loading;
    });

    const onSelectItem = (item: ItemInterface) => {
      itemsStore.action(
        MutationType.items.selectedItem,
        // store.dispatch(
        //   `${StoreModuleNames.itemsState}/${MutationType.items.selectedItem}`,
        {
          id: item.id,
          selected: !item.selected,
        },
      );
    };

    onMounted(() => {
      itemsStore.action(MutationType.items.loadItems);
    });
    return { items, loading, onSelectItem };
  },
});
</script>
