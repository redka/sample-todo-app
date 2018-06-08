import { ITEM_ACTION, ItemsAction } from './items.action';

const initialState = {
  items: []
}

export function itemsReducer(state = initialState, action: ItemsAction) {
  switch (action.type) {
    case ITEM_ACTION.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ITEM_ACTION.DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter(i => i.id !== action.payload.id)]
      };
    case ITEM_ACTION.UPDATE_ITEM:
      const idx = state.items.findIndex(i => i.id === action.payload.id);
      state.items[idx].title = action.payload.title;
      return {
        ...state,
        items: [...state.items]
      };
    case ITEM_ACTION.LOAD_ITEMS:
      return {
        ...state,
        items: [...action.payload || []]
      };
    default:
      return state;
  }
}
