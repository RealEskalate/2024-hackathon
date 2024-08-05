import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface Organizers {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: "app-organizers",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./organizers.component.html",
  styleUrl: "./organizers.component.css",
})
export class OrganizersComponent {
  showCards = true;
  organizers = [
    {
      name: "Emre Varol",
      description:
        "Emre, the distinguished CEO of A2SV, has a rich background including tenures at industry giants like Palantir and Google. He fervently strives to make a difference by bridging the gap between high-potential African students and transformative opportunities. His focus lies in fostering the next generation of African tech leaders.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1700745290/Hackathon/emre.png",
      contact: "https://www.linkedin.com/in/emre-varol/",
    },
    {
      name: "Yordanos Asmare",
      description:
        "Yordanos, a first-gen Ethiopian-American, brings a global perspective to her roles in community organizing, talent recruiting, and scaling companies. Passionate about breaking barriers, she collaborates with dreamers to foster inclusive teams. Outside of work, Yordanos enjoys warm weather, chocolate, music, soccer, and delving into philosophy and poetry.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/yordanos.jpg",
      contact: "https://www.linkedin.com/in/emre-varol/",
    },
    {
      name: "Beimnet Bekele",
      description:
        "Meet Beimnet Bekele, an Aspiring Machine Learning Researcher and accomplished Software Engineer. With a keen interest in Machine Learning, Beimnet dedicates his time to exploring and advancing this cutting-edge field. His expertise spans across software engineering and machine learning, where he continually strives to innovate and contribute to the ever-evolving world of technology.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1722869427/team/bemni_hack.png",
      contact: "https://www.linkedin.com/in/beimnet-guta/",
    },
    {
      name: "Rediet Ferew",
      description:
        "Rediet, a software engineering student in the Artificial Intelligence stream, loves various aspects of her field. First, its flexibility allows her to apply it to real-life challenges across different domains. Second, it hones her problem-solving skills and broadens her perspectives. Third, being in-demand and remote-friendly, it offers convenience and opportunities for collaboration, fostering a strong team spirit.\n\nAs a 4th-year student, Rediet delves into AI-based topics and continuously acquires new AI-related skills.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/rediet4.png",
      contact: "https://www.linkedin.com/in/rediet-ferew-8a18b922a/",
    },
    {
      name: "Bethelhem Yemane",
      description:
        "Rediet, a software engineering student in the Artificial Intelligence stream, loves various aspects of her field. First, its flexibility allows her to apply it to real-life challenges across different domains. Second, it hones her problem-solving skills and broadens her perspectives. Third, being in-demand and remote-friendly, it offers convenience and opportunities for collaboration, fostering a strong team spirit.\n\nAs a 4th-year student, Rediet delves into AI-based topics and continuously acquires new AI-related skills.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/bethelhem4.png",
      contact: "https://www.linkedin.com/in/betabravah/",
    },
    {
      name: "Paulos Dessie",
      description:
        "He believes software engineering is the most existing field in the world. There is always something new to learn.\n\nPaulos loves playing basketball and watching movies.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/paulos4.png",
      contact: "#",
    },
    {
      name: "Nathnael Dereje",
      description:
        "Natnael, a dedicated software engineering student at AAiT, finds fulfillment in the field's pivotal role in solving societal problems and simplifying lives through digitalization. With a laptop and a code editor, he is captivated by the endless possibilities of building innovative solutions.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/nathaniel4.png",
      contact: "https://www.linkedin.com/in/nathnael-dereje/",
    },

    {
      name: "Amanuel Alehegne",
      description:
        "I have a deep-seated love for mathematics, puzzles, and problem-solving, which has naturally led me to a career in software engineering. It is the logic and the math in action. I believe that technology holds the power to solve almost any challenge, with software being the very soul of machines. My passion for AI and machine learning drives my ambition to not only pursue a career as an engineer but also be at the forefront of the coming Artificial General Intelligence (AGI) revolution.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1722863506/team/aman_astu4.png",
      contact: "https://www.linkedin.com/in/amanuel-alehegne/",
    },
  ];

  setLinks(link: string) {
    window.open(link, "_blank");
  }

  toggleCards() {
    this.showCards = !this.showCards; // Toggle the visibility
  }
}
