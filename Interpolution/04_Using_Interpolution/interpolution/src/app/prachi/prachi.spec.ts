import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prachi } from './prachi';

describe('Prachi', () => {
  let component: Prachi;
  let fixture: ComponentFixture<Prachi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prachi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prachi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
