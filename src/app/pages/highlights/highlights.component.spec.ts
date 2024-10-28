import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeASponsorComponent } from '.highlights.component';

describe('BeASponsorComponent', () => {
  let component: BeASponsorComponent;
  let fixture: ComponentFixture<BeASponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeASponsorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeASponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
