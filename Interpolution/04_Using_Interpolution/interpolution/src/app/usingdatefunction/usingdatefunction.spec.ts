import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usingdatefunction } from './usingdatefunction';

describe('Usingdatefunction', () => {
  let component: Usingdatefunction;
  let fixture: ComponentFixture<Usingdatefunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usingdatefunction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usingdatefunction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
