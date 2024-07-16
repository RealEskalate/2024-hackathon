import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent {
  targetDate: Date;
  daysLeft: number | undefined;
  hoursLeft: number | undefined;
  minutesLeft: number | undefined;
  secondsLeft: number | undefined;
  semiFinalDate: Date;
  eventDate = 'July 16';
  eventText = 'Project idea submission ends on';
  eventTime = '11:59 PM WAT';
  nextEventDate= 'July 19';
  nextEventText='Quarter finals starts on'
  nextEventTime= '11:00AM'

  constructor() {
    this.targetDate = new Date('2024-07-16T22:59:00Z');
    this.semiFinalDate = new Date('2024-07-19T08:00:00Z');
  }

  chooseTargetDate(): number {
    const currentDate = new Date().getTime();
    if (currentDate < this.targetDate.getTime()) {
      return this.targetDate.getTime();
    } else {
      const button = window.document.getElementById('herosectionbutton');
      if (button) {
        button.style.display = 'none';
      }
      this.eventDate = 'July 19';
      this.eventText = 'Our hackathon quarter final will start on';
      this.eventTime = '11:00 AM EAT';
      return this.semiFinalDate.getTime();
    }
  }

  ngOnInit(): void {
    this.calculateTimeLeft();
    setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  calculateTimeLeft(): void {
    const currentDate = new Date();
   
    
    const timeDifference = this.chooseTargetDate() - currentDate.getTime();
    
    // this.daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));
    // console.log('days left',this.daysLeft);
    // this.hoursLeft = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    // this.minutesLeft = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    // this.secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
    this.daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hoursLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutesLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }

  protected readonly Number = Number;
}

// urrent Date  1698147356059  end Date 1701172800000
