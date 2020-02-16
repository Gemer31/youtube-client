import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemsBlockComponent } from './search-items-block.component';

describe('SearchItemsBlockComponent', () => {
  let component: SearchItemsBlockComponent;
  let fixture: ComponentFixture<SearchItemsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchItemsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
