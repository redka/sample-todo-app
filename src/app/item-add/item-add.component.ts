import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent {
  itemText: string = '';

  constructor(private service: ItemsService, private router: Router) {}

  onAdd() {
    if (this.itemText === '') return;

    const date = moment().format('Do MMMM YYYY');
    const item: Item = new Item(this.itemText, date);
    this.service.addItem(item);

    this.itemText = '';
    this.router.navigate(['']);
  }

}
