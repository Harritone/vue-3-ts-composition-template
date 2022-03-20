/* eslint-disable vue/multi-word-component-names */
<template>
  <li :class="cssClass" @click="onClick">
    <div class="selected-indicator">*</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { ItemInterface } from '../../../models/items/Item.interface';

export default defineComponent({
  props: {
    model: {
      type: Object as PropType<ItemInterface>,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const cssClass = computed(() => {
      let css = 'item';
      if (props.model?.selected) {
        css += ' selected';
      }
      return css.trim();
    });

    const onClick = () => {
      emit('select', props.model);
    };
    return { cssClass, onClick };
  },
});
</script>
