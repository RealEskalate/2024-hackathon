import { Component, OnInit, Renderer2 } from '@angular/core';
import { CloudinaryImage, Cloudinary } from '@cloudinary/url-gen';
import { CloudinaryService } from './../../cloudinary.service';
import { fill } from '@cloudinary/url-gen/actions/resize';
// import { WinnerModalService } from '../winner-modal.service';
@Component({
  selector: 'app-winners-2024',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './winners-2024.component.html',
  styleUrl: './winners-2024.component.css'
})

export class Winners2024Component implements OnInit {
  winners: any[] = [];
  track_winners: any[] = [];
  title_winners: string = '';
  desc_track_winners:string = '';
  desc_winners : string = '';
  title_track_winners: string = '';
  kurio_img!: CloudinaryImage;
  architect_img!: CloudinaryImage;
  cognipath!: CloudinaryImage;
  yyeni!: CloudinaryImage;

  constructor(
    private cloudinaryService: CloudinaryService,
    // private renderer: Renderer2,
 
  ) {}

  isModalOpen: boolean = false;
  modalContent: any = {};

  openModal(cardData: any) {
    // this.modalContent = cardData;
    // this.isModalOpen = true;
    // this.winnerModalService.toggleModal(true, cardData);
    // this.renderer.addClass(document.body, 'overflow-hidden');
  }

  // closeModal() {
  //   this.isModalOpen = false;
  //   // this.renderer.removeClass(document.body, 'overflow-hidden');
  // }

  ngOnInit(): void {
    this.kurio_img =
      this.cloudinaryService.generateImageUrl('Hackathon/kurioo');
    this.cognipath = this.cloudinaryService.generateImageUrl(
      'Hackathon/cognipath'
    );
    this.yyeni = this.cloudinaryService.generateImageUrl('Hackathon/yyeni');

    this.title_track_winners = 'Meet 2024 Track Winners';
    this.title_winners = 'Meet 2024 Winner Projects';
    this.desc_winners = 'The Top 3 Teams, who stood out from across Africa. Their projects, acknowledged as the best, present scalable initiatives, addressing challenges and providing solutions for communities in Africa.';
    this.desc_track_winners = 'The Track Winners teams are recognized for outstanding projects that made impactful contributions to African communities.';
    this.winners = [
      {
        teamMembers: [
          'Malek Gharsallah',
          'Nour Ben Ammar',
          'Eya Ben Moulehem',
          'Nadia Trabelsi'
        ],
        src: "https://res.cloudinary.com/eskalate/image/upload/v1728824168/Hackathon-2024/2.png",
        meetVideo: "https://res.cloudinary.com/eskalate/video/upload/v1733120924/Hackathon-2024/meetVideos/Bit_By_Bit_1.mp4",
        youtubeMeetVideo: "https://www.youtube.com/watch?v=oFVB5bmPlOY",
        website: "https://23weeks.vercel.app/",
        projectname: '23 Weeks',
        team: 'Harissa',
        money: '6,000',
        rank: 2,
        awrd_img: 'assets/silver 1 (no bg).png',
        // img: this.yyeni,
        img: 'https://res.cloudinary.com/eskalate/image/upload/v1729895392/Hackathon-2024/winners/Harrisa.jpg',
        countries: ['Tunisia'],
        description:
          ' The solution enhances prenatal care for both gynecologists and pregnant women through a suite of advanced features. For gynecologists, it provides AI-powered ultrasound enhancement that improves image clarity and resolution, facilitating more accurate interpretations. Integrated machine learning algorithms aid in the effective detection of anomalies in ultrasound images, assisting in early diagnosis and intervention.',
        teamImage: [
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/On.jpg',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/Tw.jpg',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/Thr.jpg',
        ],
        demo: '',
        pitch: '',
        webUrl: '',
        prize_description: [
          'Team Harissa enjoyed a fully-covered trip to Addis Ababa, including airfare, hotel, and other expenses. They had the valuable opportunity to pitch their project idea to renowned individuals and venture capitalists. Additionally, they received a certificate of achievement, and a direct placement opportunity in the A2SV education Cohort 5.',
        ],
        linkedin: [
          // 'https://www.linkedin.com/in/miriam-shikongo-41b2a8224',
          // 'https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216',
          // 'https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247',
        ],
      },
      {
        teamMembers: [
          'Tijani Boujdaria',
          'Walid Jlassi',
          'Minyar Meksi',
          'Mohamed Rouini'
        ],
        team: 'The Champs',
        projectname: 'Beemo',
        money: '10,000',
        rank: 1,
        img: 'https://res.cloudinary.com/eskalate/image/upload/v1729895394/Hackathon-2024/winners/Beemo.jpg',
        // img: this.cognipath,
        awrd_img: 'assets/gold 1 (no bg).png',
        countries: ['Tunisia'],
        src: "https://res.cloudinary.com/eskalate/image/upload/v1728824173/Hackathon-2024/3.png",
        meetVideo: "https://res.cloudinary.com/eskalate/video/upload/v1733120871/Hackathon-2024/meetVideos/The_Champs_Video.mp4",
        youtubeMeetVideo: "https://www.youtube.com/watch?v=Dg0kIilF-Nw",
        website: "https://beemodeploy-2.onrender.com/",
        description:
          'A generative AI-powered interactive toy for autistic children that detects emotions and provides companionship, advice, and educational entertainment. Using emotion recognition, it engages children with activities like storytelling and music to teach numbers and the alphabet, while also offering text-to-speech interaction. A parent dashboard provides progress reports, helping parents monitor development and adjust support strategies.',
        teamImage: [
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/aya.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Christian.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Mohamed.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Rebaya.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Ghada.png',
        ],
        // demo: 'https://www.youtube.com/embed/SIjvIMWqgDs?si=ZVHTL7YUAN00sYgi',
        // pitch: 'https://www.youtube.com/embed/5fKccJiX_8I?si=7TA69lVH6Ni494p8',
        // webUrl: 'https://cognipath.azurewebsites.net/',
        prize_description: [
          'Team The Champs enjoyed a fully-covered trip to Addis Ababa, including airfare, hotel, and other expenses. They had the opportunity to pitch their project to renowned individuals and venture capitalists. Along with a certificate of achievement and direct placement in the A2SV education cohort 5, the team will work with Modus Capital for personalized fundraising support and one-on-one expert guidance, elevating their project and early start-up.',
        ],
        linkedin: [
          // 'https://www.linkedin.com/in/aya-omezzine-722679174',
          // 'https://www.linkedin.com/in/christian-parfait-nebot-fonkou',
          // 'https://www.linkedin.com/in/mohamed-aziz-omezine-63491a116',
          // 'https://www.linkedin.com/in/regaya-mohamed-462992218',
          // 'https://www.linkedin.com/in/ghada-eladeb-3b2854237',
        ],
      },
      {
        teamMembers: [
          'Alazar Ashebir',
          'Emanuel Solomon',
          'Estifanos Behailu'
        ],
        team: ' BitbyBit',
        projectname: 'Study Sphere',
        money: '4,000',
        rank: 3,
        awrd_img: 'assets/bronze 1.png',
        // img: this.kurio_img,
        src: "https://res.cloudinary.com/eskalate/image/upload/v1728824209/Hackathon-2024/6.png",
        meetVideo: "https://res.cloudinary.com/eskalate/video/upload/v1733120924/Hackathon-2024/meetVideos/Bit_By_Bit_1.mp4",
        youtubeMeetVideo: "https://www.youtube.com/watch?v=MgTJC1BsGPw",
        website: "https://studyspherehome.netlify.app/",
        img: 'https://res.cloudinary.com/eskalate/image/upload/v1729895393/Hackathon-2024/winners/BitbyBit.jpg',
        countries: ['Ethiopia'],
        description:
          "An AI-powered platform that addresses learning challenges by providing personalized mentorship, AI-driven tools for intelligent question generation and research assistance, and seamless collaboration through video conferencing, real-time chat, and a shared whiteboard. It also records all user interactions, offering valuable resources for feedback, continuous improvement, and future reference.",
        teamImage: [
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701070974/Hackathon/kurio/Kamel.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701070974/Hackathon/kurio/Aymen.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701070975/Hackathon/kurio/mehdi.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701070974/Hackathon/kurio/Ahmed.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701070975/Hackathon/kurio/Moussaab.png',
        ],
        // demo: 'https://www.youtube.com/embed/BLcX8sRU-aE?si=wYdkUaKh9Xkhr4bI',
        // pitch: 'https://www.youtube.com/embed/fWRPbIW21J0?si=JdjMRhojDF052ltO',
        // mobileUrl:
        //   'https://drive.google.com/file/d/1CG6WzV7HpjxxOY_Ti6j8EgS4NJT75vpN/view?usp=drive_link',
        prize_description: [
          'Team BitbyBit enjoyed an all-inclusive trip to Addis Ababa, covering airfare, hotel, and additional expenses. They seized the opportunity to pitch their project to esteemed individuals and venture capitalists. The team received a certificate of achievement and secured a direct placement in the A2SV education cohort 5, fostering valuable educational opportunities.',
        ],
        linkedin: [
          // 'https://www.linkedin.com/in/brouthen-kamel',
          // 'https://www.linkedin.com/in/aymen-berriche-372ba81a5',
          // 'https://www.linkedin.com/in/adjal-mehdi-zakaria-a40a39223',
          // 'https://www.linkedin.com/in/ahmedyacinebouchouareb',
          // 'https://www.linkedin.com/in/moussaab-badla-16b398291',
        ],
      },
    ];

    this.track_winners = [
      {
        teamMembers: [
          'Yekene Sofiane',
          'Zouambia Sohaib',
          'Allaoua Okba',
          'Bengherbia Abdelkarim',
          'Akeb Abdelaziz'
        ],
        prize_type: 'Best Commercial Potential Award',
        projectname: 'CogniFile',
        team: 'K3A',
        src: "https://res.cloudinary.com/eskalate/image/upload/b_rgb:FFFFFF/v1728824167/Hackathon-2024/1.png",
        meetVideo: "https://res.cloudinary.com/eskalate/video/upload/v1733120964/Hackathon-2024/meetVideos/K3A_Done.mp4",
        youtubeMeetVideo: "https://www.youtube.com/watch?v=DB9HrXvNhQE",
        website: "https://www.cognifile.org/",
        prize_description:
          'Congratulations to Team K3A from Algeria! The CogniFile project effectively demonstrated outstanding commercial potential with its innovative approach and market-ready solution, making it a standout in its ability to address real-world needs and attract future customers.',
        money: '2,500',
        rank: 1,
        awrd_img: 'assets/gold 1 (no bg).png',
        // img: this.yyeni,
        img: 'https://res.cloudinary.com/eskalate/image/upload/v1729895392/Hackathon-2024/winners/K3A.jpg',
        countries: ['Algeria'],
        description:
          'AI-powered cloud storage solution designed to simplify file organization, enhance productivity, and ensure data security for organizations. With features like natural language search, an in-file contextual chatbot, automatic file hierarchy, and the option for local deployment, Cognifile makes storing and managing data smarter and faster. ',
        teamImage: [
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/On.jpg',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/Tw.jpg',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/Thr.jpg',
        ],
        // demo: 'https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-',
        // pitch: 'https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0',
        // webUrl: 'https://yyenichat.com/',
        linkedin: [
          // 'https://www.linkedin.com/in/miriam-shikongo-41b2a8224',
          // 'https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216',
          // 'https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247',
        ],
      },
      {
        teamMembers: [
          'Albert Essilfie',
          'Mawuli Zigah',
          'Felix Sam',
          'Minta Frederick Kwame'
        ],
        prize_type: 'Most Potential for Positive Change Award',
        money: '2,500',
        prize_description:
          'Congratulations to Team Farmlynco from Ghana! We commend the Farmlynco project, which stood out for its exceptional potential to make a positive impact and drive meaningful change.',
        projectname: 'Farmlynco',
        team: 'Farmlynco',
        awrd_img: 'assets/gold 1 (no bg).png',
        rank: 1,
        src: "https://res.cloudinary.com/eskalate/image/upload/v1728824193/Hackathon-2024/7.png",
        meetVideo: "https://res.cloudinary.com/eskalate/video/upload/v1733120936/Hackathon-2024/meetVideos/Team_Farmlynco_Expo_1.mp4",
        youtubeMeetVideo: "https://www.youtube.com/watch?v=7ioa3iekm10",
        website: "",
        img: 'https://res.cloudinary.com/eskalate/image/upload/v1729895393/Hackathon-2024/winners/Farmlynco.jpg',
        // img : this.yyeni,
        countries: ['Ghana'],
        description:
          'AI-powered mobile app supporting Ghanaian rice farmers by improving market access, weather forecasting, and crop health management. It connects farmers with buyers, provides real-time weather alerts via IoT devices, detects crop diseases through AI, and offers language translation in local dialects, empowering farmers to boost productivity and sustainability. ',
        teamImage: [
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/On.jpg',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/Tw.jpg',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/Thr.jpg',
        ],
        // demo: 'https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-',
        // pitch: 'https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0',
        // webUrl: 'https://yyenichat.com/',
        linkedin: [
          // 'https://www.linkedin.com/in/miriam-shikongo-41b2a8224',
          // 'https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216',
          // 'https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247',
        ],
      },
      {
        teamMembers: [
          'Alazar Ashebir',
          'Emanuel Solomon',
          'Estifanos Behailu'
        ],
        prize_type: 'Best Technical Implementation Award',
        money: '2,500',
        team: 'BitbyBit',
        projectname: 'Study Sphere',
        prize_description:
          'Congratulations to Team BitbyBit from Ethiopia! We proudly acknowledge the Study Sphere project, which stood out for its remarkable and innovative technical implementation.',
        rank: 1,
        awrd_img: 'assets/gold 1 (no bg).png',
        img : 'https://res.cloudinary.com/eskalate/image/upload/v1729895393/Hackathon-2024/winners/BitbyBit.jpg',
        // img: 'https://res.cloudinary.com/eskalate/image/upload/v1700743904/Hackathon/Architect.jpg',
        // img : this.architect_img,
        src: "https://res.cloudinary.com/eskalate/image/upload/v1728824209/Hackathon-2024/6.png",
        meetVideo: "https://res.cloudinary.com/eskalate/video/upload/v1733120924/Hackathon-2024/meetVideos/Bit_By_Bit_1.mp4",
        youtubeMeetVideo: "https://www.youtube.com/watch?v=MgTJC1BsGPw",
        website: "https://studyspherehome.netlify.app/",
        teamImage: [
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/aserr.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/birukk.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/bisratt.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/duresaa.png',
          // 'https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/estifanos.png',
        ],
        //   projectname: 'THE ARCHITECT AI',
        description:
          'VAn AI-powered platform that addresses learning challenges by providing personalized mentorship, AI-driven tools for intelligent question generation and research assistance, and seamless collaboration through video conferencing, real-time chat, and a shared whiteboard. It also records all user interactions, offering valuable resources for feedback, continuous improvement, and future reference.',
        countries: ['Ethiopia'],
        //   category : 'Personalized Assistance',
        // demo: 'https://www.youtube.com/embed/irHZkTfRL2c?si=1g-5WDz6Bx1L39zS',
        // pitch: 'https://www.youtube.com/embed/AvpUPbTf7HE?si=7USncKJOg2-K1_8Q',
        // webUrl: 'https://architect-ai-theta.vercel.app/home',
        // mobileUrl:
        //   'https://drive.google.com/file/d/1E7CKANKvaY6yh-VKgUTdcSc6QxCS8K6r/view?usp=drive_link',
        linkedin: [
          // 'https://www.linkedin.com/in/aser-hailu',
          // 'https://www.linkedin.com/in/biruk-mesfin',
          // 'https://www.linkedin.com/in/bisry',
          // 'https://www.linkedin.com/in/duresa-feyisa-513271256',
          // 'https://www.linkedin.com/in/estifanos-samson-7286bb298',
        ],
      },
      
      {
        teamMembers: [
          'Tijani Boujdaria',
          'Walid Jlassi',
          'Minyar Meksi',
          'Mohamed Rouini'
        ],
        team: 'The Champs',
        projectname: 'Beemo',
        prize_type: 'Best User Experience Award',
        money: '2,500',
        awrd_img: 'assets/gold 1 (no bg).png',
        prize_description:
          'Congratulations to Team The Champs from Tunisia! We applaud the outstanding achievement of the Beemo project, which was recognized for delivering an exceptional and intuitive user experience.',
        rank: 1,
        img: 'https://res.cloudinary.com/eskalate/image/upload/v1729895394/Hackathon-2024/winners/Beemo.jpg',
        // img: this.cognipath,
        src: "https://res.cloudinary.com/eskalate/image/upload/v1728824173/Hackathon-2024/3.png",
        meetVideo: "https://res.cloudinary.com/eskalate/video/upload/v1733120871/Hackathon-2024/meetVideos/The_Champs_Video.mp4",
        youtubeMeetVideo: "https://www.youtube.com/watch?v=Dg0kIilF-Nw",
        website: "https://beemodeploy-2.onrender.com/",
        countries: ['Tunisia'],
        description:
          'A generative AI-powered interactive toy for autistic children that detects emotions and provides companionship, advice, and educational entertainment. Using emotion recognition, it engages children with activities like storytelling and music to teach numbers and the alphabet, while also offering text-to-speech interaction. A parent dashboard provides progress reports, helping parents monitor development and adjust support strategies.',
        
        teamImage: [
          // https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/frank.png
          'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/ann.png',
          'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/frank.png',
          'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/jude.png',
          'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/nathan.png',
          'https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/wayne.png',
        ],
        //   projectname: 'StoryCraft',
        //   teamImage: [
        //     'assets/yyeni/one.png',
        //     'assets/yyeni/two.png',
        //     'assets/yyeni/three.png',
        //   ],
      
        //   category : 'AI-driven Artistry and Innovation',
        // demo: 'https://www.youtube.com/embed/YHBCz0VNjaA?si=AJHna8gKMUX8EAiR',
        // pitch: 'https://www.youtube.com/embed/d5vJMWklKpM?si=DgSCAMdTxeb99GsK',
        // webUrl: 'http://www.storycraftai.tech/',
        linkedin: [
          // 'https://www.linkedin.com/in/ann-kamau-564b88216',
          // 'https://www.linkedin.com/in/knurf-mutua',
          // 'https://www.linkedin.com/in/jude-ang-edu-451532185',
          // '#',
          // 'https://www.linkedin.com/in/wayneasava',
        ],
      },
      
    ];
  }

  getRankClass(rank: number) {
    switch (rank) {
      case 1:
        return 'md:mt-[-40px] bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 text-white '; // Replace with your desired Tailwind class for rank 1
      case 2:
        return 'md:mt-[-20px] bg-gradient-to-r from-gray-400 to-gray-200 silver_custome text-black '; // Replace with your desired Tailwind class for rank 2
      case 3:
        return 'bg-gradient-to-r from-bronze-900 via-bronze-700 to-bronze-500 text-white  '; // Replace with your desired Tailwind class for rank 3
      default:
        return 'bg-gray-200'; // Default background color for other ranks
    }
  }
  getButtonsClass(rank: number) {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 text-yellow-500 '; // Replace with your desired Tailwind class for rank 1
      case 2:
        return 'bg-gradient-to-r from-gray-400 to-gray-200 silver_custome text-purple-500 '; // Replace with your desired Tailwind class for rank 2
      case 3:
        return 'bg-gradient-to-r from-bronze-900 via-bronze-700 to-bronze-500 text-orange-500  '; // Replace with your desired Tailwind class for rank 3
      default:
        return 'bg-gray-200'; // Default background color for other ranks
    }
  }
  getCardText(rank: number) {
    switch (rank) {
      case 1:
        return ' text-amber-200 '; // Replace with your desired Tailwind class for rank 1
      case 2:
        return ' text-gray-200 '; // Replace with your desired Tailwind class for rank 2
      case 3:
        return ' text-bronze-200  '; // Replace with your desired Tailwind class for rank 3
      default:
        return 'bg-gray-200'; // Default background color for other ranks
    }
  }
}
