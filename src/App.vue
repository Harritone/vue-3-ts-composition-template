<template>
  <div class="long-date">
    {{ i18n.d(new Date(), 'long') }}
  </div>
  <h2>{{ i18n.t('welcome') }}</h2>
  <LocaleSelector
    :available-locales="availableLocales"
    @clicked="onLocaleClicked"
  />
  <ThemeSelector />
  <div id="nav" class="nav">
    <router-link to="/">{{ i18n.t('navigation.home') }}</router-link> |
    <router-link to="/about">{{ i18n.t('navigation.about') }}</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { MutationType } from './models/store';
import { useLocalesStore } from '@/store/locales';
import LocaleSelector from '@/components/locale-selector/LocaleSelector.component.vue';
import { LocaleInfoInterface } from './models/localization/LocaleInfo.interface';
import ThemeSelector from '@/components/theme-selector/ThemeSelector.component.vue';

export default defineComponent({
  name: 'App',
  components: {
    LocaleSelector,
    ThemeSelector,
  },
  setup() {
    const i18n = useI18n();
    const localesStore = useLocalesStore();

    const availableLocales = computed(() => {
      return localesStore.state.availableLocales;
    });

    const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
      localesStore.action(MutationType.locales.selectLocale, localeInfo.locale);
    };
    return { i18n, availableLocales, onLocaleClicked };
  },
});
</script>
