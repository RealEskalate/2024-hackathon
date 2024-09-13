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
      title: "Expo Hall (live) ticket",
      price: "Free",
      features: ["Access to Expo Hall for 2 days"]
    },
    {
      title: "Student Ticket (virtual)",
      price: "Free",
      features: ["Access to YouTube link for livestream of October 14th: Workshops"]
    },
    {
      title: "General Ticket",
      price: "$10",
      features: ["Jury Pitches", "Leadership Sessions", "Closing Ceremony", "Access to All Attendees"]
    },
    {
      title: "Investor Ticket",
      price: "$100",
      features: ["Investor Pitches", "Leadership Sessions", "Closing Ceremony", "Meet and Greets with Startups of choosing"]
    }
  ];
}
