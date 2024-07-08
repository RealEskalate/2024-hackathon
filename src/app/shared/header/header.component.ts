import { Component, Input, HostListener, ElementRef, Output, EventEmitter } from "@angular/core";
import { ModalService } from "src/app/modal.service";
import { RegisterService } from "src/app/services/register.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showMenu: boolean = false;
  isModalOpenArray: boolean = false;
  @Input() currentSection: string = "home";
  constructor(private elRef: ElementRef, private modalService: ModalService, private registerService: RegisterService) {}
  
  showModal: boolean = false;
  dropdownVisible: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  openModal(event: Event) {
    event.stopPropagation();
    this.modalService.openModal();
  }

  openRegisterModal() {
    this.registerService.openModal();
    this.registerService.showEligibility();
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
  navigateToEligiblity(){
    const shareModal = window.document.getElementById('register_modal') as HTMLDialogElement;
    shareModal?.close();
    this.scrollToSection('eligibility')
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
