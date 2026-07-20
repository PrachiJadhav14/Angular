import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrachiList } from './prachi-list';

describe('PrachiList', () => {
  let component: PrachiList;
  let fixture: ComponentFixture<PrachiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrachiList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrachiList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
