import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P7DetailComponent } from './p7-detail.component';

describe('P7DetailComponent', () => {
  let component: P7DetailComponent;
  let fixture: ComponentFixture<P7DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P7DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P7DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
