import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesCount } from './messages-count';

describe('MessagesCount', () => {
  let component: MessagesCount;
  let fixture: ComponentFixture<MessagesCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesCount],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
