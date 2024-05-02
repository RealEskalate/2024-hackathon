import { Component } from '@angular/core';
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

  setActiveButton(buttonName: string) {
    this.activeButton = buttonName;
  }
}
