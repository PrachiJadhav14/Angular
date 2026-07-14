import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeDirectives } from './custome-directives';

describe('CustomeDirectives', () => {
  let component: CustomeDirectives;
  let fixture: ComponentFixture<CustomeDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
