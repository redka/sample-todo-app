import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditComponent } from './item-edit.component';
import { ItemsService } from '../items.service';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from '../redux/items.reducer';
import { FormsModule } from '@angular/forms';

describe('EditComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent],
      providers: [ItemsService],
      imports: [
        StoreModule.forRoot({itemsReducer}),
        RouterTestingModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should be created Item edit component', async(() => {
    const fixture = TestBed.createComponent(EditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
