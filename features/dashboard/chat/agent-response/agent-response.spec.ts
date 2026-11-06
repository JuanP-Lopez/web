import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentResponse } from './agent-response';

describe('AgentResponse', () => {
  let component: AgentResponse;
  let fixture: ComponentFixture<AgentResponse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentResponse],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentResponse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
