import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-event-program',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './event-program.component.html',
  styleUrl: './event-program.component.css'
})
export class EventProgramComponent {

      isImageModalOpen = false;
      currentImage: string | null = null;

      openImageModal(imageUrl: string) {
        this.currentImage = imageUrl;
        this.isImageModalOpen = true;
      }

      closeImageModal() {
        this.isImageModalOpen = false;
        this.currentImage = null;
      }
      slideConfig = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2500,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoplay:true,
        autoplayTimeout:2500,
        autoplaySpeed: 2000,
        autoplayHoverPause:true,
        dots: false,
        // navSpeed: 700,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          740: {
            items: 3
          },
          940: {
            items: 4
          }
        }
      }
   eventData = [
  
    {
        date: "October 12,2024",
        time: "9:00 AM",
        title: "Expo day 1",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731255313/Hackathon-2024/events/Expo%20day%201/",
        totalImages: 12,
        description: "Innovation took center stage as hackathon finalists and 8 selected core development projects showcased their solutions. Teams introduced their projects to a diverse audience of tech enthusiasts, investors, and industry leaders. The day emphasized networking and feedback, offering participants an opportunity to refine their ideas and prepare for final presentations."
    },
    {
        date: "October 13,2024",
        time: "9:00 AM",
        title: "Expo Day 2",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731254593/Hackathon-2024/events/Expo%20day%202/",
        totalImages: 15,
        description: "Teams delivered their final pitches, presenting fully developed solutions to experts, investors, potential partners, tech enthusiasts, and media guests. Both hackathon finalists and core development teams competed for recognition, with awards given for technical execution and creativity. Attendees engaged with teams through Q&A and discussed potential collaborations or partnerships."
    },
    {
        date: "October 14,2024",
        time: "9:00 AM",
        title: "Investor Panel - Remote",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731254593/Hackathon-2024/events/Remote%20Investor/",
        totalImages: 10,
        description: "Teams presented their projects remotely to a global network of investors. Both hackathon and core development participants showcased their solutions, gaining real-time feedback and exploring funding prospects. Investors assessed scalability, market potential, and team readiness, offering a global platform for participants to secure investment."
    },
    {
        date: "October 14,2024",
        time: "2:30 PM",
        title: "Investor Panel - Inperson",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731254593/Hackathon-2024/events/Inperson%20Investor/",
        totalImages: 20,
        description: "Teams connected with leading investors in a face-to-face meeting. Hackathon finalists and core development teams had in-depth discussions, focusing on business models and future plans. This in-person setting fostered stronger connections, creating opportunities for significant investments that could propel projects forward."
    },
    {
        date: "October 15,2024",
        time: "1:30 PM",
        title: "Finalists Jury Evaluations",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731254593/Hackathon-2024/events/Finalists%20Jury/",
        totalImages: 38,
        description: "Expert evaluations of hackathon grand finale projects took place. Judges assessed the technical execution, creativity, and impact of each solution. Teams were evaluated on their ability to solve real-world challenges, with scores determining the best projects in terms of innovation and scalability."
    },
    {
        date: "October 16,2024",
        time: "1:30 PM",
        title: "CoreDev Jury Evaluations",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731254593/Hackathon-2024/events/Core-dev%20Jury/",
        totalImages: 6,
        description: "The hackathon and CoreDev competitions culminated with top projects being celebrated. The projects recieved jury evaluations and feedback on their progress, partnerships they've formed so far and next plans."
    },
    {
        date: "October 16,2024",
        time: "1:30 PM",
        title: "Closing Ceremony",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731254593/Hackathon-2024/events/Closing%20Ceremony/",
        totalImages: 28,
        description: "The closing ceremony recognized the most impactful solutions from both categories. Awards and recognitions highlighted achievements in technical excellence, creativity, and overall contribution."
    },
    {
        date: "October 17,2024",
        time: "6:30 AM",
        title: "Trip to Wanchi Lake",
        showCarousel: false,
        baseImageLink: "https://res.cloudinary.com/eskalate/image/upload/v1731254593/Hackathon-2024/events/Trip/",
        totalImages: 26,
        description: "After an intense week at the A2SV Hackathon, the team took a well-deserved trip to the scenic Wanchi in the Southwest Shewa Zone. This beautiful getaway offered a perfect blend of relaxation, fun, and team bonding, allowing everyone to unwind and connect beyond the pitch rooms and presentations. It was an ideal way to celebrate our hard work and create lasting memories together!"
    }
    
];



}
