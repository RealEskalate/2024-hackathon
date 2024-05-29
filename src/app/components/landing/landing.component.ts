import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

// import { SlickCarouselConfig } from 'ngx-slick-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  activeButton: string = '';
  images: string[] = [
    'https://res.cloudinary.com/eskalate/image/upload/v1714657507/Hackathon/Expo-min.png',
    'https://res.cloudinary.com/eskalate/image/upload/v1714657509/Hackathon/certificateDay-min.jpg',
    'https://res.cloudinary.com/eskalate/image/upload/v1700746297/Hackathon/yyeni.jpg',
    'https://res.cloudinary.com/eskalate/image/upload/v1703573932/Hackathon/Architect.jpg',
    'https://res.cloudinary.com/eskalate/image/upload/v1714657509/Hackathon/hackathon_coding-min.jpg'
  
    
  ];
  isMuted=true;
  slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover : true,
    infinite : true,
    arrows : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows : true,
          infinite : true,
          slidesToShow: 2,
          slideToScroll : 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows : true,
        }
      }
    ]
  };
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showModal: boolean = false;
  showChat = false;
  showMentorsModal = false;
  showAdvisorsModal = false;
  mentorsRegistrationLink = "https://form.typeform.com/to/UvayCDEJ"
  advisorsRegistrationLink = "https://form.typeform.com/to/mMzeQ63l"
  showGetInvolvedModal = true;
  showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  showRegistrationModal = true;
  // slideConfig = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   speed: 2500,
  //   pauseOnHover: false,
  //   cssEase: 'linear',
  //   responsive: [
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  onShowModal() {
   
    this.toggleChatEvent.emit(false);
    this.showModal = true;
    document.body.classList.add('overflow-hidden', 'z-0')
  }

  onRegisterTeam() {
    this.toggleChatEvent.emit(false);
    this.showTeamRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
  }

  onRegisterIndividual() {
    this.toggleChatEvent.emit(false);
    this.showIndividualRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
  }

  onShowMentorsModal() {
    this.toggleChatEvent.emit(false);
    this.showMentorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
  }

  onShowAdvisorsModal(){
    this.toggleChatEvent.emit(false)
    this.showAdvisorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
  }

  onHideModal() {
    this.toggleChatEvent.emit(true)
    this.showModal = false;
    this.showGetInvolvedModal = true;
    this.showRegistrationModal = true;
    this.showMentorsModal = false;
    this.showAdvisorsModal = false;
    this.showTeamRegistrationModal = false;
    this.showIndividualRegistrationModal = false;
    document.body.classList.remove('overflow-hidden', 'z-0' )
    document.getElementById('prizes')?.classList.remove('z-0')
    document.getElementById('prizes')?.classList.add('z-40')
    document.getElementById('partners')?.classList.remove('hidden')
    document.getElementById('info')?.classList.remove('hidden')
    document.getElementById('judges')?.classList.remove('hidden')
    document.getElementById('eligibility')?.classList.remove('hidden')
    document.getElementById('about-us')?.classList.remove('hidden')
    document.getElementById('footer')?.classList.remove('hidden')
  }

  scrollDown(): void {
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById('prizes');
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  setActiveButton(buttonName: string, link: string) {
    this.activeButton = buttonName;
    window.open(link, '_blank');
  }

  meLoading: boolean = true;
}
