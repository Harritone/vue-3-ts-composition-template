/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare interface process {
  env: {
    VUE_APP_CONFIG: string;
    VUE_APP_TOKEN_KEY: string;
    VUE_APP_API_CLIENT: string;
  };
}
