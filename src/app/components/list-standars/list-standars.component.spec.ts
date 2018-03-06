import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStandarsComponent } from './list-standars.component';

describe('ListStandarsComponent', () => {
  let component: ListStandarsComponent;
  let fixture: ComponentFixture<ListStandarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStandarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStandarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
