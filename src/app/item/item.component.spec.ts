import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemComponent } from './item.component';
import { ItemsService } from '../items.service';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from '../redux/items.reducer';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

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
  });

  it('should be created Item component', async(() => {
    expect(component).toBeTruthy();
  }));

  // it('should dispatch an action to load data', () => {
  //   const fixture = TestBed.createComponent(ItemComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   app.ngOnInit();
  //   // const action = new TodoActions.LoadTodos();
  //   // expect(store.dispatch).toHaveBeenCalledWith(action);
  //   // expect(store.select).toHaveBeenCalled();
  // });

});
