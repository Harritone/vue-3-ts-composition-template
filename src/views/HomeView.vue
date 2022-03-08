<template>
  <div class="home">
    <ItemsListComponentVue :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ItemsListComponentVue from '@/components/items/ItemsList.component.vue';
import { ItemInterface } from '@/models/items/Item.interface';

export default defineComponent({
  name: 'HomeView',
  components: {
    ItemsListComponentVue,
  },
  setup() {
    const items: ItemInterface[] = reactive([
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
    ]);

    return { items };
  },
});
</script>
