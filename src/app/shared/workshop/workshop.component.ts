import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

export interface Workshop {
  title: string;
  description: string;
  author: string;
  authorDescription: string;
}
@Component({
  selector: "app-workshop",
  templateUrl: "./workshop.component.html",
  styleUrls: ["./workshop.component.css"],
})
export class WorkshopComponent {
  @Input() workshop: Workshop | undefined;
  showCards = false; // Initialize as true

  constructor(private sanitizer: DomSanitizer) {
  }

  workshops_lists: any[] = [
    { title: "UI Design and Styling ", description: "Join us and understand the principles of user experience (UX) design and learn how to create user-friendly interfaces while staying updated with the latest trends in UI design. This workshop will focus on designing with the user in mind to enhance usability and satisfaction, and provide insights into modern visual design practices, including color theory, typography, and responsive design.", src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/t7WsFtUGTqE?si=OMPabAqBPqphZUTX") },
    { title: "Project Management Tools", description: "Join us as this workshop will introduce essential tools and techniques for effective collaboration. Learn about project management tools that can streamline teamwork and enhance productivity.", src:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/TS61L2gXb68?si=bVgw6gwzJfM7DDat") },
    { title: "Generative AI and its Applications", description: "Join us and explore the various application areas of Large Language Models (LLMs) in different sectors such as environment, commerce, health, education, and more. This comprehensive workshop will delve into real-world examples and case studies demonstrating the transformative impact of LLMs across various industries.",src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gYxDZ3N7uwA?si=xgO1wkqORkLhlbdO") },
    { title: "Pitching and Presentation Skills", description: "Learn how to craft compelling pitches that attract investment, including storytelling techniques and presentation skills. This workshop will help you refine your pitch to make a memorable impact on your audience.", src : this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/fjar3OI2HJs?si=wLFzGbgst8yhg1bE") },
    { title: "Hackathon Dynamics", description: "Join us and learn strategies for building strong, collaborative teams and managing team dynamics during a hackathon. This workshop will cover best practices for teamwork, communication, conflict resolution, and maximizing productivity.", src : this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/prTJSU2kqzI?si=1B9sItjD-hNZbwJA")},
    { title: "Project Idea Submission", description: "Join us and learn about the Project Idea Submission Phase and what is expected from you. This workshop is a great opportunity to learn, ask questions, and get feedback on your project ideas from experienced mentors.", src : this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XNTJpjX8i00?si=1B9sItjD-hNZbwJA.")}
  ];

  toggleCards() {
    this.showCards = !this.showCards; // Toggle the visibility
  }
}
