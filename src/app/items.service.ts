import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { AddItem, DeleteItem, LoadItems, UpdateItem } from './redux/items.action';

import { Item } from './item.model';

@Injectable()
export class ItemsService {
  public items: Item[];
  constructor(private store: Store<AppState>) {}

  loadItems() {
    this.items = JSON.parse(localStorage.getItem('items'));
    this.store.dispatch(new LoadItems(this.items));
    return this.items;
  }

  IDGenerator() {
    const length = 4;
    const timestamp = +new Date;

    function _getRandomInt(min, max) {
      return Math.floor(Math.random() * ( max - min + 1 )) + min;
    }

    const ts = timestamp.toString();
    const parts = ts.split('').reverse();
    let id = '';

    for (let i = 0; i < length; ++i) {
      const index = _getRandomInt(0, parts.length - 1);
      id += parts[index];
    }
    return Number(id);
  }

  addItem(item: Item) {
    this.items = JSON.parse(localStorage.getItem('items')) || [];

    // add fake ID
    item.id = this.IDGenerator();

    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.store.dispatch(new AddItem(item));
  }

  deleteItem(item: Item) {
    this.items = JSON.parse(localStorage.getItem('items'));

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        this.items.splice(i, 1);
        localStorage.setItem('items', JSON.stringify(this.items));
        this.store.dispatch(new DeleteItem(item));
      }
    }
  }

  updateItem(item: Item) {
    this.items = JSON.parse(localStorage.getItem('items'));

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        this.items[i].title = item.title;
        localStorage.setItem('items', JSON.stringify(this.items));
        this.store.dispatch(new UpdateItem(item));
      }
    }
  }
}
