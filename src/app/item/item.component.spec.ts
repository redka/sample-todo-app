import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemComponent } from './item.component';
import { ItemsService } from '../items.service';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from '../redux/items.reducer';

describe('ItemComponent', () => {

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

  it('should be created Item component', async(() => {
    const fixture = TestBed.createComponent(ItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
