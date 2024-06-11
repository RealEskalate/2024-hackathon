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
  showShareModal = false;
  telegramSharingLink= "https://t.me/share/url?url=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  linkedinSharingLink= "https://www.linkedin.com/sharing/share-offsite/?url=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png&summary=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  twitterSharingLink= "https://twitter.com/intent/tweet?url=https://pbs.twimg.com/media/GPsyu1fXEAEDXNf?format=jpg&name=medium&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20registration!%20https://hackathon.a2sv.org"
  facebookSharingLink= "https://www.facebook.com/sharer/sharer.php?u=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png&t=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  instagramSharingLink = "https://www.instagram.com/?url=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  
  ngOnChanges() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }
  getSafeRegistrationLink(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }
  setActiveButton(buttonName: string, link: string) {
    window.open(link, '_blank');
  }

  closeModal(){
   

    const shareModal = window.document.getElementById('share_modal') as HTMLDialogElement;
    shareModal?.showModal();
    this.showShareModal = true;
  }
  closeForReal(){
    const shareModal = window.document.getElementById('share_modal') as HTMLDialogElement;
    shareModal?.close();
    this.isIframeLoading = true;
    this.closeModalEvent.emit();
  }
  onIframeLoad() {
    this.isIframeLoading = false;
  }
}
