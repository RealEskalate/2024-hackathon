import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private sanitizer: DomSanitizer) {

  }
  @Input() showModal: boolean = false;
  @Input() registrationLink: string = "";
  @Input() comingName: string = "";
  @Output() closeModalEvent = new EventEmitter<void>();
  isIframeLoading: boolean = true;
  sanitizedUrl: SafeResourceUrl | undefined;

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
