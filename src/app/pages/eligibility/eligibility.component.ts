import {Component, EventEmitter, Output} from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {

  constructor(private registerService: RegisterService) {}
  @Output() openChatEvent = new EventEmitter<void>()
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59)
  isIndividual: boolean = true;
  registrationButtonVisible = true;
  ngOnInit(): void {
    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
  }

  checkEligibility() {
    this.registerService.checkEligibility();
    this.registerService.openModal();
  }
  updateRegistrationButtonVisibility() {
    const now = new Date();
    this.registrationButtonVisible = now < this.registrationDeadline;
  }
  openChat(){
    this.openChatEvent.emit()
  }

  criterieas = [
    {text: "Every team must have a minimum of 3 members and a maximum of 5 members."},
    {text: "Every team member must be located in Africa."},
    {text: "All team members must be students currently enrolled in a University, College (undergrad, Associate, Diploma program), or High School, with a graduation year after January 2024. Students currently pursuing or who have completed a Master's degree or higher are not eligible to participate."},
    {text: "If you don't have a team you can register individually and we'll match you with other talented developers, designers, and problem solvers."}
  ]
  individualCriterieas = [
    /*
   All team members must be currently enrolled in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa.
Graduation years of all team members must be after January 2024.
Each team member can only be registered to one team.
Teams must have 3 to 5 members.*/
    {text:"All participants must be students currently enrolled in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa."},
    {text:"Graduation years of students must be after January 2024."},
    {text:"Students can form teams after registration or will be grouped into teams by the organizers."},

  ]
  teamCriterieas = [
    {text:"All team members must be currently enrolled in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa."},
    {text:"Graduation years of all team members must be after January 2024."},
    {text:"Each team member can only be registered to one team."},
    {text:"Teams must have 3 to 5 members."},

  ]
  showIndividualCriteria() {
    this.isIndividual = true;
  }

  showTeamCriteria() {
    this.isIndividual = false;
  }

}
