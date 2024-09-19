import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-program',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './event-program.component.html',
  styleUrl: './event-program.component.css'
})
export class EventProgramComponent {
  
   eventData = [
  
    {
        date: "October 12,2024",
        time: "9:00 AM",
        title: "Expo day 1",
        description: "This will be the day when innovation takes center stage, as both hackathon finalists and 8 selected core development projects showcase their solutions. Teams will introduce their projects to a diverse audience of tech enthusiasts, investors, and industry leaders. The day emphasizes networking and feedback, offering participants an early opportunity to refine their ideas and prepare for final presentations."
    },
    {
        date: "October 13,2024",
        time: "9:00 AM",
        title: "Expo Day 2",
        description: "A high-energy day where teams deliver their final pitches, presenting fully developed solutions to experts, investors, potential partners, tech enthusiasts, media guests . Both hackathon finalists and core development teams will compete for recognition, with awards given for technical execution and creativity. This is the perfect platform for attendees to engage with teams through Q&A and discuss potential collaborations or partnerships."
    },
    {
        date: "October 14,2024",
        time: "9:00 AM",
        title: "Investor Panel - Remote",
        description: "An amazing opportunity for teams to present their projects remotely to a global network of investors. Both hackathon and core development participants will showcase their solutions, gaining real-time feedback and exploring funding prospects. Investors will assess scalability, market potential, and team readiness, offering a global platform for participants to secure investment."
    },
    {
        date: "October 14,2024",
        time: "2:30 PM",
        title: "Investor Panel - Inperson",
        description: "A highly valuable face-to-face meeting where teams connect with leading investors. Hackathon finalists and core development teams will have in-depth discussions, focusing on business models and future plans. This in-person setting fosters stronger connections, creating opportunities for significant investments that could propel projects forward."
    },
    {
        date: "October 15,2024",
        time: "1:30 PM",
        title: "Jury Evaluations for Hackathon",
        description: "This stage will feature expert evaluations of hackathon grand finale projects. Judges will assess the technical execution, creativity, and impact of each solution. Teams will be evaluated on their ability to solve real-world challenges, with scores determining the best projects in terms of innovation and scalability."
    },
    {
        date: "October 16,2024",
        time: "1:30 PM",
        title: "Jury Evaluations for CoreDev + Closing Ceremony",
        description: "An exciting culmination of the hackathon and CoreDev competitions, where top projects will be celebrated. In addition to jury evaluations, the closing ceremony will recognize the most impactful solutions from both categories. Awards and recognitions will highlight achievements in technical excellence, creativity, and overall contribution, marking the end of an incredible journey for all participants."
    }
    
];



}
