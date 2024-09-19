import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDevComponent } from './core-dev.component';

describe('CoreDevComponent', () => {
  let component: CoreDevComponent;
  let fixture: ComponentFixture<CoreDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
