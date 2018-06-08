import { Item } from '../item.model';

export interface AppState {
  itemPage: {
    items: Item[]
  };
}
