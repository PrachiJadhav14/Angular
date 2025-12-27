import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePages } from './five-pages';

describe('FivePages', () => {
  let component: FivePages;
  let fixture: ComponentFixture<FivePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
