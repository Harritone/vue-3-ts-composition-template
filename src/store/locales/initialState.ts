import { LocalesStateInterface } from '@/models/store';
/**
 * @name initialLocalesState
 * @description
 * The Locales state instance
 */

export const initialLocalesState: LocalesStateInterface = {
  availableLocales: [
    {
      name: 'USA',
      locale: 'en',
      flag: 'us',
      selected: false,
    },
    {
      name: 'RUS',
      locale: 'ru',
      flag: 'ru',
      selected: true,
    },
  ],
};
