import { Component } from '@angular/core';

export interface AboutUsContent {
  title: string;
  description1: string;
  description: string;
  image: string;
  footer?: string;



}

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.css']
})
export class AboutUsSectionComponent {

  contents: AboutUsContent[] = [
    { title: 'About A2SV', description: "A2SV (Africa to Silicon Valley), a hub of innovation in the field of technology education, is a US-based nonprofit tech academy and project incubator empowering Africa's tech ecosystem. With a unique blend of comprehensive software engineering training and tech-driven solutions, A2SV is more than an education; it's a movement.",  image: 'assets/group_photo1.jpg', footer: 'https://www.a2sv.org',description1 : 'A2SV partners with top African universities and global tech leaders like Google, Meta, and Databricks to foster elite software engineers. With 63 offers from leading companies, our engineers are Google-level caliber. We’ve hired 180 employees in Africa, providing three times the opportunities to stay on the continent rather than working abroad. Our free program breaks financial barriers and paves the way for a tech-driven future.' },
    
  ];
  setActiveButton(buttonName: string, link: string) {
    window.open(link, '_blank');
  }
  

}
