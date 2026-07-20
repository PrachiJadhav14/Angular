import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignlas } from './computed-signlas';

describe('ComputedSignlas', () => {
  let component: ComputedSignlas;
  let fixture: ComponentFixture<ComputedSignlas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignlas],
    }).compileComponents();

    fixture = TestBed.createComponent(ComputedSignlas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
