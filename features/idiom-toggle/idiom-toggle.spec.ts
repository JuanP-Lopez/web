import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomToggle } from './idiom-toggle';

describe('IdiomToggle', () => {
  let component: IdiomToggle;
  let fixture: ComponentFixture<IdiomToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdiomToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(IdiomToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
