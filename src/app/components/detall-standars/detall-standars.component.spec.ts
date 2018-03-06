import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallStandarsComponent } from './detall-standars.component';

describe('DetallStandarsComponent', () => {
  let component: DetallStandarsComponent;
  let fixture: ComponentFixture<DetallStandarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallStandarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallStandarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
