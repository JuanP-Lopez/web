import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationMenu } from './automation-menu';

describe('AutomationMenu', () => {
  let component: AutomationMenu;
  let fixture: ComponentFixture<AutomationMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(AutomationMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
