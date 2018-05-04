import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStandardsComponent } from './list-standards.component';

describe('ListStandardsComponent', () => {
  let component: ListStandardsComponent;
  let fixture: ComponentFixture<ListStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
