import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Omkar } from './omkar';

describe('Omkar', () => {
  let component: Omkar;
  let fixture: ComponentFixture<Omkar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Omkar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Omkar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
