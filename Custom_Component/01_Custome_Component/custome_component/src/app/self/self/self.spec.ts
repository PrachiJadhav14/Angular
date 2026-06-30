import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Self } from './self';

describe('Self', () => {
  let component: Self;
  let fixture: ComponentFixture<Self>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Self]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Self);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
