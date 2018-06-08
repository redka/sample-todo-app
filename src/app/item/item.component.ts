import { Component, OnInit } from '@angular/core';
import { Items } from '../item.model';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs/index';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public itemState: Observable<Items>;

  constructor(
    private service: ItemsService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.service.loadItems();
    this.itemState = this.store.select('itemPage');
  }

  onDelete(item) {
    this.service.deleteItem(item);
  }
}
