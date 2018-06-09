import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemAddComponent } from './item-add.component';
import { ItemsService } from '../items.service';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from '../redux/items.reducer';
import { FormsModule } from '@angular/forms';

describe('ItemAddComponent', () => {
  let component: ItemAddComponent;
  let fixture: ComponentFixture<ItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemAddComponent],
      providers: [ItemsService],
      imports: [
        StoreModule.forRoot({itemsReducer}),
        RouterTestingModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddComponent);
    component = fixture.componentInstance;
  });

  it('should be created Item add component', async(() => {
    expect(component).toBeTruthy();
  }));
});
