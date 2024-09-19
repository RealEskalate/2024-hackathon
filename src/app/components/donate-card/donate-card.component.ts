import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";

declare var FundraiseUp: any; // Declare FundraiseUp to avoid TypeScript errors

@Component({
  selector: "app-donate-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./donate-card.component.html",
  styleUrl: "./donate-card.component.css",
})
export class DonateCardComponent {
  @ViewChild("donateCard") donateCard!: ElementRef;

  cardDetails = [
    {
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1722869427/team/bemni_hack.png",
      donateId: "#XLKCSNLM",
    },
    {
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1718608239/Hackathon/hackathon_coding.jpg",
      donateId: "#XTMHQMCT",
    },
    {
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1718630355/activities/python_lecture.jpg",
      donateId: "#XFRFHFHY",
    },
    {
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1709715574/gallery/members/group.jpg",
      donateId: "#XHRSSPWL",
    },
  ];

  // Function to trigger FundraiseUp popup
  openDonatePopup(donateId: string) {
    if (typeof FundraiseUp !== "undefined") {
      console.log("FundraiseUp loaded:", FundraiseUp);

      FundraiseUp.track({ campaign: donateId });
    } else {
      console.error("FundraiseUp not loaded.");
    }
  }
}
