import { Component, Input, HostListener, ElementRef, Output, EventEmitter } from "@angular/core";
import { ModalService } from "src/app/modal.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showMenu: boolean = false;
  isModalOpenArray: boolean = false;
  @Input() currentSection: string = "home";
  showRegistrationModal = true;
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  constructor(private elRef: ElementRef, private modalService: ModalService) {}
  showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  indivisualRegistrationLink = "https://a2sv.typeform.com/to/yxMUctSN"
  teamRegistrationLink = "https://a2sv.typeform.com/to/qtKuYH58"
 individualName = 'individual'
  teamName = 'team'
  showModal: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  openModal(event: Event) {
    event.stopPropagation();
    this.modalService.openModal();
  }

  onShowModal() {
    this.toggleChatEvent.emit(false);
    this.showModal = true;
    document.body.classList.add('overflow-hidden', 'z-0')
  }

  onRegisterIndividual() {
    this.toggleChatEvent.emit(false);
    this.showIndividualRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
  }
  onRegisterTeam() {
    this.toggleChatEvent.emit(false);
    this.showTeamRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
  }
  onHideModal() {
    this.toggleChatEvent.emit(true)
    this.showModal = false;
    this.showRegistrationModal = true;
    this.showTeamRegistrationModal = false;
    this.showIndividualRegistrationModal = false;
    document.body.classList.remove('overflow-hidden', 'z-0' )
    document.getElementById('prizes')?.classList.remove('z-0')
    document.getElementById('prizes')?.classList.add('z-40')
    document.getElementById('partners')?.classList.remove('hidden')
    document.getElementById('info')?.classList.remove('hidden')
    document.getElementById('judges')?.classList.remove('hidden')
    document.getElementById('eligibility')?.classList.remove('hidden')
    document.getElementById('about-us')?.classList.remove('hidden')
    document.getElementById('footer')?.classList.remove('hidden')
  }
  closeModal() {
    this.showRegistrationModal = false;
  }

  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean =
      !document.body.classList.contains("overflow-hidden");
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  setActiveButton(buttonName: string, link: string) {
    window.open(link, "_blank");
  }
}
