import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoPresentersComponent } from './expo-presenters.component';

describe('ExpoPresentersComponent', () => {
  let component: ExpoPresentersComponent;
  let fixture: ComponentFixture<ExpoPresentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpoPresentersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpoPresentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
