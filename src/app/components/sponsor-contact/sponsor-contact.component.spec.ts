import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorContactComponent } from './sponsor-contact.component';

describe('SponsorContactComponent', () => {
  let component: SponsorContactComponent;
  let fixture: ComponentFixture<SponsorContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
