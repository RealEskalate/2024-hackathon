import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-tickets',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './get-tickets.component.html',
  styleUrl: './get-tickets.component.css'
})
export class GetTicketsComponent {
  tickets = [
    {
      title: "General",
      price: "$10",
      features: ["Jury Pitches", "Leadership Sessions", "Closing Ceremony", "Access to All Attendees"],
      ticket_link : "https://www.zeffy.com/ticketing/b44d8621-4fba-48ae-9f8b-b5c5628543eb"
    },
    {
      title: "Investor",
      price: "$25 Early Bird",
      features: ["Investor Pitches", "Leadership Sessions", "Closing Ceremony", "Meet and Greets with Startups of choosing", "All Benefits from General Ticket"],
      ticket_link : "https://www.zeffy.com/ticketing/2446451b-99a7-4305-aaee-ca44991c9d3e"
    },
    {
      title: "Expo Hall (live)",
      price: "Free",
      features: ["Access to Expo Hall for 2 days"],
      ticket_link : "https://www.zeffy.com/ticketing/b321a500-a560-4016-858c-71bb4bd686e7"
    },
    {
      title: "Student (virtual)",
      price: "Free",
      features: ["Access to YouTube link for livestream of October 14th: Workshops"],
      ticket_link : "https://www.zeffy.com/ticketing/909dd2ea-8bfd-4c36-8f7e-dfbd07a659c8"
    }
   
  ];

  setLinks(link: string) {
    window.open(link, "_blank");
  }
}
