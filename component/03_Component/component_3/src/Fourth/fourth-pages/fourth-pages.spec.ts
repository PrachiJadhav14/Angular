import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthPages } from './fourth-pages';

describe('FourthPages', () => {
  let component: FourthPages;
  let fixture: ComponentFixture<FourthPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
