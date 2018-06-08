export class Item {
  constructor(
    public title: string,
    public date: string,
    public id?: number
  ) {}
}

export interface Items {
  items: Item[];
}
