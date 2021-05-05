import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmbComponent } from './tmb.component';

describe('TmbComponent', () => {
  let component: TmbComponent;
  let fixture: ComponentFixture<TmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
