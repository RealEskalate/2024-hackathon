import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


export interface SemiFinalist {
  title: string;
  description: string;
  author: string;
  authorDescription: string;
  src?: SafeResourceUrl; // Optional video URL
  image?: string;
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
  showCards = false; // Initialize as true

  constructor(private sanitizer: DomSanitizer) {
  }

  semiFinalist_lists: any[] = [
    { title: "iSpeak",
      description: "An AI-powered pronunciation Coach that analyses user pronunciation in real time, offering instant feedback and corrections to help users improve their speech accuracy. The platform provides personalized, structured phonetics lessons with dynamic content covering key concepts like vowel sounds, consonant sounds, intonation, and stress patterns to help unique individuals learn effectively.", 
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/0ACl1w2WQJ8?si=9eWEaD39ACaGVCAT") },
    
      { title: "Beemo",
      description: "A generative AI-powered interactive toy for autistic children that detects emotions and provides companionship, advice, and educational entertainment. Using emotion recognition, it engages children with activities like storytelling and music to teach numbers and the alphabet, while also offering text-to-speech interaction. A parent dashboard provides progress reports, helping parents monitor development and adjust support strategies.", 
      image: 'Champs.png' },
    
      { title: "CogniFile",
      description: "An innovative file management solution that offers multilingual search, voice integration, and AI-driven metadata generation. It automates file organization, detects duplicates, and enhances security with local deployment, version control, and malicious file detection. With features like file translation, advanced search for images and voice, and robust data backup, it streamlines organization and boosts productivity while ensuring data privacy.", 
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VQLD2CVtDm4?si=jTYwC9Sp_yNr5ufu") },
    
      { title: "23 Weeks",
      description: "The solution enhances prenatal care for both gynecologists and pregnant women through a suite of advanced features. For gynecologists, it provides AI-powered ultrasound enhancement that improves image clarity and resolution, facilitating more accurate interpretations. Integrated machine learning algorithms aid in the effective detection of anomalies in ultrasound images, assisting in early diagnosis and intervention.", 
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5DjGjTmsbsM?si=bCQ_lK7afvDQjkny") },
    
      { title: "Konsume",
      description: "An AI-powered platform that simplifies meal planning and dietary management by offering personalized meal plans based on health conditions and preferences, an AI food scanner to analyze nutrition, customized meal schedules, and restaurant recommendations. It includes a gamified progress tracker to motivate users, real-time advice from personal AI advisors, and budgeting tools that suggest meals based on available ingredients. This integrated approach makes healthy eating accessible, convenient, and enjoyable while helping users meet dietary goals and manage meal budgets effectively.", 
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/j82sSYXa59Y?si=TD7UIPYPwynI96Ba") },
    
      { title: "Get Ai",
      description: " AI-powered barcode scanning system, named Get Ai, designed to provide comprehensive product information to consumers across Africa. This system leverages advanced AI and LLM (Large Language Model) technology to scan barcodes on various products and deliver detailed usage instructions, safety guidelines, ingredient lists, similar products, locally made alternatives and other essential information based on user's information.", 
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dihC-d3Boo0?si=-zhP6othf1rbqfC0") },
    
      { title: "Farmlynco",
      description: "An AI-powered mobile application designed to address the critical challenges faced by local rice farmers in Ghana. Our solution leverages advanced artificial intelligence and Internet of Things (IoT) technology to provide comprehensive support in the following areas:",
      src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/CBKtr8Q-9mc?si=Kw5ELgizNyRjgNXE") },
    
      { title: "Study Sphere",
      description: "An AI-powered platform that addresses learning challenges by providing personalized mentorship, AI-driven tools for intelligent question generation and research assistance, and seamless collaboration through video conferencing, real-time chat, and a shared whiteboard. It also records all user interactions, offering valuable resources for feedback, continuous improvement, and future reference.", 
      image: "BitByBit.png"}
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
