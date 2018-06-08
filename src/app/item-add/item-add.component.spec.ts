import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemAddComponent } from './item-add.component';
import { ItemsService } from '../items.service';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from '../redux/items.reducer';
import { FormsModule } from '@angular/forms';

describe('ItemAddComponent', () => {

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

  it('should be created Item add component', async(() => {
    const fixture = TestBed.createComponent(ItemAddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
