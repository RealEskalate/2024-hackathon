import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiFinalistsComponent } from './semi-finalists.component';

describe('SemiFinalistsComponent', () => {
  let component: SemiFinalistsComponent;
  let fixture: ComponentFixture<SemiFinalistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemiFinalistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemiFinalistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
