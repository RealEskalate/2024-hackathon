import {
  Component,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from "src/app/modal.service";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  activeTab: string = '';
  activeDropdown: string | null = null;
  showMenu: boolean = false;
  isModalOpenArray: boolean = false;
  @Input() currentSection: string = "landing";
  constructor(
    private elRef: ElementRef,
    private modalService: ModalService,
    private registerService: RegisterService,
    private router: Router, private activatedRoute: ActivatedRoute
  ) {}


  ngOnInit() {
    // Listen for fragment changes which might occur on the same page
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }


  showMentorsModal = false;
  mentorsRegistrationLink = "https://a2sv.typeform.com/to/wHajkVvJ";
  showModal: boolean = false;
  dropdownVisible: boolean = false;
  showGetInvolvedModal = true;
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showWaitlistBanner: boolean = true;


  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


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

  onShowMentorsModal() {
    this.toggleChatEvent.emit(false);
    this.showMentorsModal = true;
    this.showGetInvolvedModal = false;

    document.body.classList.add("overflow-hidden", "z-0");
    document.getElementById("prizes")?.classList.add("z-0");
    document.getElementById("prizes")?.classList.remove("z-40");
  }

  onHideModal() {
    this.toggleChatEvent.emit(true);
    this.showModal = false;
    this.showGetInvolvedModal = true;
    this.showMentorsModal = false;
    document.body.classList.remove("overflow-hidden", "z-0");
    document.getElementById("prizes")?.classList.remove("z-0");
    document.getElementById("prizes")?.classList.add("z-40");
    document.getElementById("partners")?.classList.remove("hidden");
    document.getElementById("info")?.classList.remove("hidden");
    document.getElementById("judges")?.classList.remove("hidden");
    document.getElementById("eligibility")?.classList.remove("hidden");
    document.getElementById("about-us")?.classList.remove("hidden");
    document.getElementById("footer")?.classList.remove("hidden");
  }

  scrollToSection(fullPath: string): void {
    console.log("called", fullPath);

    // Extract the base route and section from the fullPath
    const [path, sectionId] = fullPath.split('#');
    const element = document.getElementById(sectionId);
    console.log("the element", element);
    const headerOffset = 100; // Adjust this value as needed

    if (element) {
      // If element exists on the current page, scroll to it with an offset
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      // If we're not on the correct page or the element doesn't exist, navigate and then scroll
      this.router.navigate([path], { fragment: sectionId }).then(() => {
        setTimeout(() => {  // Wait for the page to stabilize
          const element = document.getElementById(sectionId);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      });
    }
  }

  setLinks(link: string) {
    window.open(link, "_blank");
  }
  navigateToEligiblity() {
    const shareModal = window.document.getElementById(
      "register_modal"
    ) as HTMLDialogElement;
    shareModal?.close();
    this.scrollToSection("eligibility");
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  toggleMobileDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
  onHideWaitlistBanner() {
    this.showWaitlistBanner = false;
  }
}
