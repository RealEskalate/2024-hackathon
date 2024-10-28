import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Winners2024Component } from './winners-2024.component';

describe('Winners2024Component', () => {
  let component: Winners2024Component;
  let fixture: ComponentFixture<Winners2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Winners2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Winners2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
