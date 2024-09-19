import { Component, ViewChild, Input,ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-core-dev',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-dev.component.html',
  styleUrl: './core-dev.component.css'
})
export class CoreDevComponent {
  @ViewChild('cardsSection') cardsSection!: ElementRef;
  @Input() workshop: CoreDevComponent | undefined;
  showCards = false; // Initialize as true

  constructor(private sanitizer: DomSanitizer) { 
  }
  setLinks(link: string) {
    window.open(link, "_blank");
  }

  coreDev_lists: any[] = [
    { title: "Adot ", 
      description: "Adot is a comprehensive pregnancy tracking platform that empowers expectant parents with accurate, localized information. From tracking vital signs to offering personalized guidance on prenatal care and wellbeing, Adot is a valuable companion throughout one's pregnancy journey.", 
      src: "assets/Adot_dark.png",
      webUrl : "https://www.adot.life/",
      playStore_url : "https://play.google.com/store/apps/details?id=org.a2sv.adot_mobile",
      logoSrc:  "assets/weblogo.png",
      telegram_url: "https://t.me/+g9OmqcWHngVmMjE8",
      telegram_logo:"assets/telegram.png",
      mobile : "https://play.google.com/store/apps/details?id=org.a2sv.adot_mobile",
      apple_logo:"assets/apple_logo.png",
      playStore_logo:"assets/playstore.png",
      apple_url:"https://apps.apple.com/us/app/adot-life/id6596767832"

     },

     { title: "Akil ", 
      description: "Akil is a user-friendly internet platform that efficiently connects NGOs with qualified volunteers. Akil's distinctive quality lies in its centralized platform, streamlining volunteer management process and fostering efficient communication between NGOs and volunteers.",
      src: "assets/Akil_dark.png",
      logoSrc:  "assets/weblogo.png",
      webUrl : "http://akilconnect.org/",
      telegram_url: "https://web.telegram.org/k/#@akilconnectbot",
      telegram_logo:"assets/telegram.png",
      mobile : "",
      playStore_logo:"assets/playstore.png",
      playStore_url: "https://play.google.com/store/apps/details?id=org.a2sv.akil_mobile"




     },
     { title: "Afrochat ", 
      description: "AfroChat is a platform to power Africa through Generative AI. We plan to give unlimited access, and specialized use-cases that will help anyone in Africa both in individual and organizational perspective.",
      src: "assets/Afrochat_dark.png",
      logoSrc:  "assets/weblogo.png",
      webUrl : "https://afrochat.app/",
      telegram_url: "https://t.me/afro_chat_telegram_bot",
      telegram_logo:"assets/telegram.png",
      mobile : "",
      apple_logo:"assets/apple_logo.png",
      playStore_logo:"assets/playstore.png",
      playStore_url:"https://play.google.com/store/apps/details?id=org.a2sv.afro_chat&pcampaignid=web_share&pli=1",
      apple_url:"https://testflight.apple.com/join/6TPEtqVg"


     },
     { title: "RateEat ", 
      description: "RateEat empowers diners in Ethiopia with menu, price, ingredient, and review information for local restaurants. It promotes informed dining choices and restaurant feedback through user ratings, enriching the local culinary scene. RateEat: Explore, Evaluate, Enhance.", 
      src: "assets/Rateeat_dark.png",
      logoSrc:  "assets/weblogo.png",
      webUrl : "https://rateeat.app/",
      telegram_url: "https://t.me/RateEat_bot",
      telegram_logo:"assets/telegram.png",
      mobile : "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile",
      playStore_logo:"assets/playstore.png",
      playStore_url: "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile"



     },
     { title: "SkillBridge", 
      description:"SkillBridge is an AI-powered educational platform designed to help students overcome learning obstacles. It offers a wide range of study materials, customized exam preparation tools, practice questions, and AI assistance. It adapts to different learning preferences, which ultimately improves the quality of education and boosts success rates in exams",
      src: "assets/Skillbridge_dark.png",
      logoSrc:  "assets/weblogo.png",
      webUrl : "https://skillbridge.academy/",
      telegram_url: "https://t.me/skillbridge_bot",
      telegram_logo:"assets/telegram.png",
      mobile : "https://play.google.com/store/apps/details?id=academy.skillbridge.skill_bridge_mobile&pli=1",
      playStore_logo:"assets/playstore.png",
      playStore_url:"https://play.google.com/store/apps/details?id=academy.skillbridge.skill_bridge_mobile"



     },
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
