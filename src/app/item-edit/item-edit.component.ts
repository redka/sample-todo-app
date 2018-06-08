import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { ItemsService } from '../items.service';
import { Item, Items } from '../item.model';
import { AppState } from '../redux/app.state';


@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class EditComponent  implements OnInit  {
  public itemState: Observable<Items>;
  public itemText: string;
  private ID: number;
  public item: Item;

  constructor(
    private service: ItemsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.itemState = this.store.select('itemPage');

    this.route.paramMap.subscribe(params => {
      this.ID = Number(params.get('id'));
    });

    this.item = this.service.loadItems().find(i => i.id === this.ID);
    this.itemText = this.item.title;
  }


  onUpdate() {
    if (this.itemText === '') return;

    this.item.title = this.itemText;
    this.service.updateItem(this.item);
    this.router.navigate(['']);
  }
}
