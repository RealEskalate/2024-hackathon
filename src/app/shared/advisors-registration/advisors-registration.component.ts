import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-advisors-registration',
  templateUrl: './advisors-registration.component.html',
  styleUrls: ['./advisors-registration.component.css']
})
export class AdvisorsRegistrationComponent {
  @Input() showModal: boolean = false;
  @Input() registrationLink: string = "";
  @Output() closeModalEvent = new EventEmitter<void>();
  isIframeLoading: boolean = true;
  sanitizedUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnChanges() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }

  getSafeRegistrationLink(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }

  closeModal(){
    this.closeModalEvent.emit()
    this.isIframeLoading = true;
  }
  onIframeLoad() {
    this.isIframeLoading = false;
  }
}
