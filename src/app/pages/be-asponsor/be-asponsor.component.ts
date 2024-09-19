import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: 'app-be-asponsor',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './be-asponsor.component.html',
  styleUrl: './be-asponsor.component.css'
})
export class BeASponsorComponent {


  @ViewChild('submitSection') submitSection!: ElementRef; // Corrected reference name
  currentSection: string = 'be-asponsor';
  showCards = false; // Initialize as true

  constructor(private sanitizer: DomSanitizer) {
  }

  selectedSponsorType: string = '';
  selectedAmount : number = 0;

  workshops_lists: any[] = [
    { title: "Platinum Sponsor (Innovator)",subtitle: "$25,000+ (1 available)", amount: 25000 , description: "Enhance your brand with exclusive naming rights, keynote opportunities, and prominent event exposure. Network and recruit at our prime booth space, with VIP access to all sessions and the awards dinner. Post-event, secure first-choice recruitment and priority sponsorship for next year's Tech Summit." , src: "assets/prize_logos/Platinum_level.png"},
    { title: "Gold Sponsor (Trailblazer)", subtitle: "$15,000+ (2 available)",amount: 15000, description: "Enhance your brand with premier logo placement, naming rights, and a speaking slot at the closing ceremony. Network effectively with a large booth, an awards dinner table, and 10 hackathon tickets. Post-event, gain recruitment priority, promotional media access, and early consideration for next year’s Tech Summit.", src: "assets/prize_logos/gold_level.png"},
    { title: "Silver Sponsor (Catalyst)", subtitle: "$10,000+ (5 available)", amount: 10000, description: "Enhance your brand with prominent logo placement, social media mentions, and the chance to lead a workshop. Benefit from medium booth space, five complimentary tickets, and inclusion in event communications. Post-event, gain access to the talent pool, use of event media, and priority consideration for next year's African Tech Leadership Summit. ", src: "assets/prize_logos/silver_level.png"},
    { title: "Bronze Sponsor (Pioneer) ", subtitle: "$5,000+", amount: 5000, description: "Increase your brand's exposure with logo placement on the event landing page and social media mentions. Engage attendees from your booth space and with two complimentary hackathon tickets. Post-event, benefit from access to our talent pool and use of event media for promotions.", src: "assets/prize_logos/bronze_level.png"},
    // { title: "Hackathon Dynamics", description: "Join us and learn strategies for building strong, collaborative teams and managing team dynamics during a hackathon. This workshop will cover best practices for teamwork, communication, conflict resolution, and maximizing productivity.", src: 'assets/prize_logos/Platinum_level.png'}
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
    console.log("scroll to section");
    this.submitSection.nativeElement.scrollIntoView({ behavior: 'smooth' }); // Corrected reference
  }
  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean =
      !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setSponsorType(type: string, amount: number) {
    this.selectedSponsorType = type;
    this.selectedAmount = amount;
    console.log("this.selectedSponsorType", this.selectedSponsorType);
    this.scrollToSection('submitSection');
  }
}


