import {Component, EventEmitter, Output} from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      
    ])
  ]
})
export class EligibilityComponent {

  constructor(private registerService: RegisterService) {

  }
  @Output() openChatEvent = new EventEmitter<void>()
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59)
  isIndividual: boolean = true;
  registrationButtonVisible = true;
  
  ngOnInit(): void {
    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
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
  individualCriteria = [
    { text: "Are you currently studying or have you completed your studies in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa?", answered: null },
    { text: "Is your graduation year after January 2024?", answered: null },
    { text: "Are you already in a team of 4 - 5 or are you willing to be grouped into teams by the organizers?", answered: null }
  ];
  teamCriteria = [
    {text:"Are all of your team members currently studying or have completed their studies in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa?", answered: null},
    {text:"Are the graduation years of all team members after January 2024?", answered: null},
    {text:"Is each team member registered only to one team?", answered: null},
    {text:"Does your team have 3 to 5 members?", answered:null},

  ]
 
 

  criteria: any[] = this.individualCriteria;

  currentQuestionIndex: number = 0;
  eligibilityConfirmed: boolean = false;
  ineligible: boolean = false;
 

 

  showIndividualCriteria() {
    this.isIndividual = true;
    this.resetEligibility();
    this.criteria = this.individualCriteria;
  }

  showTeamCriteria() {
    this.isIndividual = false;
    this.resetEligibility();
    this.criteria = this.teamCriteria;
  }

  resetEligibility() {
    this.currentQuestionIndex = 0;
    this.eligibilityConfirmed = false;
    this.ineligible = false;
    this.registrationButtonVisible = false;
    this.criteria.forEach(c => c.answered = null);
  }

  answerYes() {
    this.criteria[this.currentQuestionIndex].answered = true;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.criteria.length) {
      this.eligibilityConfirmed = true;
      this.registrationButtonVisible = true;
    }
  }

  answerNo() {
    this.criteria[this.currentQuestionIndex].answered = false;
    this.ineligible = true;
  }
}