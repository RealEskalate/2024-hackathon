import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


export interface SemiFinalist {
  title: string;
  description: string;
  author: string;
  authorDescription: string;
}
@Component({
  selector: 'app-semi-finalists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semi-finalists.component.html',
  styleUrl: './semi-finalists.component.css'
})
export class SemiFinalistsComponent {
  @ViewChild('cardsSection') cardsSection!: ElementRef;
  @Input() workshop: SemiFinalist | undefined;
  showCards = false; // Initialize as true

  constructor(private sanitizer: DomSanitizer) {
  }

  semiFinalist_lists: any[] = [
    // { title: "Project title ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/t7WsFtUGTqE?si=OMPabAqBPqphZUTX") },
     ];

  toggleCards() {
    this.showCards = !this.showCards; // Toggle the visibility
    if (this.showCards) {
      setTimeout(() => {
        this.scrollToCardsSection();
      }, 0);
    }
  }

  scrollToCardsSection() {
    console.log("scrool to section");
    
    this.cardsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
