import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smartphone } from './smartphone';

describe('Smartphone', () => {
  let component: Smartphone;
  let fixture: ComponentFixture<Smartphone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smartphone],
    }).compileComponents();

    fixture = TestBed.createComponent(Smartphone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
