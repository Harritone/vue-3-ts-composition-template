/* eslint-disable @typescript-eslint/no-namespace */
import { ItemsMutationType } from '../items/ItemsMutationType';
import { LocalesMutationType } from '../locales/LocalesMutationType';

export namespace MutationType {
  export const items = ItemsMutationType;
  export const locales = LocalesMutationType;
}
