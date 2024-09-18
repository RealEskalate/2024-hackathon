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
      ticket_link : "https://www.zeffy.com/ticketing/ebe084f2-8534-48af-a77e-ac29b3e050d1"
    },
    {
      title: "Investor",
      price: "$100",
      features: ["Investor Pitches", "Leadership Sessions", "Closing Ceremony", "Meet and Greets with Startups of choosing", "All Benefits from General Ticket"],
      ticket_link : "https://www.zeffy.com/ticketing/449c8bd9-f9c7-45b5-a6d2-c7dbe4817a45"
    },
    {
      title: "Expo Hall (live)",
      price: "Free",
      features: ["Access to Expo Hall for 2 days"],
      ticket_link : "https://www.zeffy.com/ticketing/4681d781-a965-427f-9804-ea9263c8866b"
    },
    {
      title: "Student (virtual)",
      price: "Free",
      features: ["Access to YouTube link for livestream of October 14th: Workshops"],
      ticket_link : "https://www.zeffy.com/ticketing/8c4e5e69-9a85-44f8-8562-f4834e57f2e4"
    }
   
  ];

  setLinks(link: string) {
    window.open(link, "_blank");
  }
}
