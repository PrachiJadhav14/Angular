import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contatct } from './contatct';

describe('Contatct', () => {
  let component: Contatct;
  let fixture: ComponentFixture<Contatct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contatct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contatct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
