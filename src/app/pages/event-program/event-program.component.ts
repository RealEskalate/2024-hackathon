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
        date: "Oct 11, Fri",
        time: "",
        title: "Workshops",
        description: "Stage 1 and 2"
    },
    {
        date: "Oct 11, Fri",
        time: "",
        title: "Expo Booth Setups",
        description: "Stage 3"
    },
    {
        date: "Oct 12, Sat",
        time: "",
        title: "Expo Day 1",
        description: "Stage 4"
    },
    {
        date: "Oct 12, Sat",
        time: "",
        title: "Expo Day 1 Cool Down",
        description: "Stage 5"
    },
    {
        date: "Oct 13, Sun",
        time: "",
        title: "Expo Day 2",
        description: "Stage 6 and 8"
    },
    {
        date: "Oct 13, Sun",
        time: "",
        title: "Expo Day 2 Cool Down",
        description: "Stage 7 and 8"
    },
    {
        date: "Oct 14, Mon",
        time: "",
        title: "Investor Panel - Inperson",
        description: "Stage 9"
    },
    {
        date: "Oct 14, Mon",
        time: "",
        title: "Dinner Night",
        description: "Stage 10"
    },
    {
        date: "Oct 15, Tue",
        time: "1:00",
        title: "Jury Evaluations for Hackathon",
        description: "Stage 11"
    },
    {
        date: "Oct 16, Wed",
        time: "1:00, 3:00, 6:00",
        title: "Jury Evaluations for CoreDev + Closing Ceremony",
        description: "Stage 12 and 13"
    },
    {
        date: "Oct 17, Thu",
        time: "",
        title: "Trip",
        description: "Stage 14"
    }
];



}
