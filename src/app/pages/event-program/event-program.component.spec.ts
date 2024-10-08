import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventProgramComponent } from './event-program.component';

describe('EventProgramComponent', () => {
  let component: EventProgramComponent;
  let fixture: ComponentFixture<EventProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
