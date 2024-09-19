import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { EmailService } from 'src/app/services/sponsor_email_service';// Ensure this path is correct
import { countryCodes } from 'src/app/static/countryCodes';

@Component({
  selector: 'app-sponsor-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add ReactiveFormsModule here
  templateUrl: './sponsor-contact.component.html',
  styleUrls: ['./sponsor-contact.component.css']
})
export class SponsorContactComponent implements OnInit, OnChanges { // Add OnChanges here
  countryCodes = countryCodes;
  sponsorLevels: string[] = [
    'Platinum Sponsor (Innovator)',
    'Gold Sponsor (Trailblazer)',
    'Silver Sponsor (Catalyst)',
    'Bronze Sponsor (Pioneer)'
  ];
  @Input() sponsorType: string = '';
  @Input() amount: number = 0;
  
  loading = false;
  contactForm!: FormGroup;
  isOrganization: boolean = false;

  constructor(private fb: FormBuilder, public emailService: EmailService) {}

  minimumAmountValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return value >= 5000 ? null : { minAmount: true };
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      countryCode: ['', Validators.required],
      phone : ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      linkedin: [''],
      type: ['', Validators.required],
      businessName: [''],
      sponsorLevel: [this.sponsorType || '', Validators.required], // Default value is empty
      amount: [this.amount, [Validators.required, this.minimumAmountValidator]], // Initialize amount
      message: ['', Validators.required] // Initialize message
    });

    this.contactForm.get('type')?.valueChanges.subscribe(value => {
      this.isOrganization = value === 'organization';
      if (this.isOrganization) {
        this.contactForm.get('businessName')?.setValidators(Validators.required);
      } else {
        this.contactForm.get('businessName')?.clearValidators();
      }
      this.contactForm.get('businessName')?.updateValueAndValidity();
    });

    this.contactForm.get('amount')?.valueChanges.subscribe(value => {
      if (value < 5000) {
        this.contactForm.get('sponsorLevel')?.setValue('');
      } else if (value >= 5000 && value < 10000) {
        this.contactForm.get('sponsorLevel')?.setValue('Bronze Sponsor (Pioneer)');
      } else if (value >= 10000 && value < 15000) {
        this.contactForm.get('sponsorLevel')?.setValue('Silver Sponsor (Catalyst)');
      } else if (value >= 15000 && value < 25000) {
        this.contactForm.get('sponsorLevel')?.setValue('Gold Sponsor (Trailblazer)');
      } else if (value >= 25000) {
        this.contactForm.get('sponsorLevel')?.setValue('Platinum Sponsor (Innovator)');
      }
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sponsorType'] && !changes['sponsorType'].firstChange) {
      this.contactForm.patchValue({
        sponsorLevel: this.sponsorType || ''
      });
    }
    if (changes['amount'] && !changes['amount'].firstChange) {
      this.contactForm.patchValue({
        amount: this.amount
      });
    }
  }

  onTypeChange(): void {
    const type = this.contactForm.get('type')?.value;
    this.isOrganization = type === 'organization';
  }

  onSubmit(): void {
    console.log("Form submitted", this.contactForm.value);
    
    if (this.contactForm.valid) {
      this.loading = true; // Move this line here
      const emailParams = {
        fullName: this.contactForm.value.fullName,
        email: this.contactForm.value.email,
        phone: `${this.contactForm.value.countryCode}${this.contactForm.value.phone}`, // Combine country code and phone number
        businessName: this.contactForm.value.businessName,
        linkedin: this.contactForm.value.linkedin,
        type: this.contactForm.value.type,
        sponsorLevel: this.contactForm.value.sponsorLevel,
        message: this.contactForm.value.message,
        amount: this.contactForm.value.amount
      };
  
      this.emailService.sendEmail(emailParams).subscribe({
        next: (response) => {
          this.contactForm.reset();
          this.loading = false;
        },
        error: (error) => {
          console.error("Error sending email", error);
          this.loading = false;
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
