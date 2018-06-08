import { Action } from '@ngrx/store';
import { Item } from '../item.model';

export namespace ITEM_ACTION {
  export const ADD_ITEM = 'ADD_ITEM';
  export const DELETE_ITEM = 'DELETE_ITEM';
  export const UPDATE_ITEM = 'UPDATE_ITEM';
  export const LOAD_ITEMS = 'LOAD_ITEMS';
}

export class AddItem implements Action {
  readonly type = ITEM_ACTION.ADD_ITEM;

  constructor(public payload: Item) {}
}

export class DeleteItem implements Action {
  readonly type = ITEM_ACTION.DELETE_ITEM;

  constructor(public payload: Item) {}
}

export class UpdateItem implements Action {
  readonly type = ITEM_ACTION.UPDATE_ITEM;

  constructor(public payload: Item) {}
}

export class LoadItems implements Action {
  readonly type = ITEM_ACTION.LOAD_ITEMS;

  constructor(public payload: Item[]) {}
}

export type ItemsAction = AddItem | DeleteItem | UpdateItem | LoadItems;
