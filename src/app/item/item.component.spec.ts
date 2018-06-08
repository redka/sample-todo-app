import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemComponent } from './item.component';
import { ItemsService } from '../items.service';
import { Store, StoreModule } from '@ngrx/store';
import { ITEM_ACTION } from '../redux/items.action';
import { AppState } from '../redux/app.state';
import { itemsReducer } from '../redux/items.reducer';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let store: Store<AppState>;
  let itemsService: ItemsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      providers: [ItemsService],
      imports: [
        StoreModule.forRoot({itemsReducer}),
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    itemsService = fixture.debugElement.injector.get(ItemsService);
    store.dispatch({
      type: ITEM_ACTION.LOAD_ITEMS,
    });
  });

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));
  // it('store to be defined', async(() => {
  //   expect(store).toBeDefined();
  // }));
  // it('data is there in component', async(() => {
  //   expect(component.data).toBeDefined();
  // }));

});
