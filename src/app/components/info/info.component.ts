import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

export interface Step{
  number: string,
  title: string,
  description: string | null,
  date: string,
}
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(public sanitizer: DomSanitizer){
  }

  steps = [
    {number: '1', title: "Registration",description: "Students to register for the African-wide hackathon focused on AI.",  date: "1 June - 6 July, 2024", final: false},
    {number: '2', title: "Project Idea Submission and Filtration",description: "During this phase, participants submit their project ideas for consideration. Ideas undergo thorough evaluation and filtering to ensure alignment with hackathon objectives and feasibility for development.",  date: "8-12 July, 2024", final: false},
    {number: '3', title: 'Workshops',description: "Our initial workshops provide participants with an in-depth understanding of AI, hackathon dynamics, and idea generation.",  date: '13-14 July, 2024', final: false},
    {number: '4', title: "Quarterfinals",description: "Participants undertake a virtual hackathon, competing for a place among the top 32 projects and receiving expert mentorship along the way.",  date: '16-20 July, 2024', final: false},
    {number: '5', title: "Semifinals",description: "Continued guidance from advisors help refine and optimize the projects of the remaining teams. This phase is marked by iterative feedback and project refinement.",  date: 'July 28 - September 6, 2024', final: false},
    // {number: '6', title: "Grand Finale",description: "The top 8 teams were flown to Ethiopia for an all-expense-paid 2-day in-person event. They competed for a total prize pool of $30,000, presenting their projects to a distinguished jury.",  date: '21-26 September, 2024', final: false},
  ]
  calendarLink = "https://calendar.google.com/calendar/u/0?cid=Y18wYjU0ZmZlYjIxZWFjYmNiNTZiM2RhNzkwNzMyYmY5MTg4OTdkNWJjODQzMTJlMWI3YmUzOTlmYjFhN2QzYTFlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"

  workshops = [
    {title: "AI", description: "Learn about the basics of AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
    {title: "Hackathon Dynamics", description: "Learn about the basics of AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
    {title: "Idea Generation", description: "Learn about the basics of AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
  ]

  setActiveButton(buttonName: string, link: string) {
    window.open(link, '_blank');
  }
}
