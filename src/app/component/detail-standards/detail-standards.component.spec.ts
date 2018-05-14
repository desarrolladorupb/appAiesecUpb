import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStandardsComponent } from './detail-standards.component';

describe('DetailStandardsComponent', () => {
  let component: DetailStandardsComponent;
  let fixture: ComponentFixture<DetailStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
