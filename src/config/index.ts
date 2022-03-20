import { ConfigInterface } from './Config.interface';

import configMock from './config-files/mock.json';
import configLocal from './config-files/local.json';
import configBeta from './config-files/beta.json';
import configLive from './config-files/live.json';

let env = 'mock';

if (process.env && process.env.VUE_APP_CONFIG) {
  env = process.env.VUE_APP_CONFIG.trim().toLowerCase();
}

export const configsMap: Map<string, ConfigInterface> = new Map<
  string,
  ConfigInterface
>([
  ['mock', configMock],
  ['local', configLocal],
  ['beta', configBeta],
  ['live', configLive],
]);

if (!configsMap.has(env)) {
  throw Error(`Could not find config for VUE_APP_CONFIG key "${env}"`);
}

export const config: ConfigInterface = configsMap.get(env) as ConfigInterface;
