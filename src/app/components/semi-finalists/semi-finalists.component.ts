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
  showCards = true; // Initialize as true

  constructor(private sanitizer: DomSanitizer) {
  }

  semiFinalist_lists: any[] = [
    { title: "23 Weeks", description: "The solution enhances prenatal care for both gynecologists and pregnant women through a suite of advanced features. For gynecologists, it provides AI-powered ultrasound enhancement that improves image clarity and resolution, facilitating more accurate interpretations. Integrated machine learning algorithms aid in the effective detection of anomalies in ultrasound images, assisting in early diagnosis and intervention.", src: "https://res.cloudinary.com/eskalate/image/upload/v1728824168/Hackathon-2024/2.png"},
    { title: "Beemo", description: "A generative AI-powered interactive toy for autistic children that detects emotions and provides companionship, advice, and educational entertainment. Using emotion recognition, it engages children with activities like storytelling and music to teach numbers and the alphabet, while also offering text-to-speech interaction. A parent dashboard provides progress reports, helping parents monitor development and adjust support strategies.", src: "https://res.cloudinary.com/eskalate/image/upload/v1728824173/Hackathon-2024/3.png"},
    { title: "CogniFile", description: "An innovative file management solution that offers multilingual search, voice integration, and AI-driven metadata generation. It automates file organization, detects duplicates, and enhances security with local deployment, version control, and malicious file detection. With features like file translation, advanced search for images and voice, and robust data backup, it streamlines organization and boosts productivity while ensuring data privacy.", src: "https://res.cloudinary.com/eskalate/image/upload/b_rgb:FFFFFF/v1728824167/Hackathon-2024/1.png" },
    { title: "Farmlynco", description: "AI-powered mobile app supporting Ghanaian rice farmers by improving market access, weather forecasting, and crop health management. It connects farmers with buyers, provides real-time weather alerts via IoT devices, detects crop diseases through AI, and offers language translation in local dialects, empowering farmers to boost productivity and sustainability.", src:"https://res.cloudinary.com/eskalate/image/upload/v1728824193/Hackathon-2024/7.png"},
    { title: "Get Ai", description: "AI-powered barcode scanning system, named Get Ai, designed to provide comprehensive product information to consumers across Africa. This system leverages advanced AI and LLM (Large Language Model) technology to scan barcodes on various products and deliver detailed usage instructions, safety guidelines, ingredient lists, similar products, locally made alternatives and other essential information based on user's information.", src: "https://res.cloudinary.com/eskalate/image/upload/v1728824165/Hackathon-2024/5.png"},
    { title: "Languin", description: "An AI-powered pronunciation Coach that analyzes user pronunciation in real time, offering instant feedback and corrections to help users improve their speech accuracy. The platform provides personalized, structured phonetics lessons with dynamic content covering key concepts like vowel sounds, consonant sounds, intonation, and stress patterns to help unique individuals learn effectively.", src: "https://res.cloudinary.com/eskalate/image/upload/v1728824180/Hackathon-2024/8.png" },
    { title: "Konsume", description: "An AI-powered platform that simplifies meal planning and dietary management by offering personalized meal plans based on health conditions and preferences, an AI food scanner to analyze nutrition, customized meal schedules, and restaurant recommendations. It includes a gamified progress tracker to motivate users, real-time advice from personal AI advisors, and budgeting tools that suggest meals based on available ingredients. This integrated approach makes healthy eating accessible, convenient, and enjoyable while helping users meet dietary goals and manage meal budgets effectively.", src: "https://res.cloudinary.com/eskalate/image/upload/v1728824165/Hackathon-2024/4.png" },
    { title: "Study Sphere", description: "An AI-powered platform that addresses learning challenges by providing personalized mentorship, AI-driven tools for intelligent question generation and research assistance, and seamless collaboration through video conferencing, real-time chat, and a shared whiteboard. It also records all user interactions, offering valuable resources for feedback, continuous improvement, and future reference.", src: "https://res.cloudinary.com/eskalate/image/upload/v1728824209/Hackathon-2024/6.png"},
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
