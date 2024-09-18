import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-program',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './event-program.component.html',
  styleUrl: './event-program.component.css'
})
export class EventProgramComponent {
  day = 1;
  showDay() {
    const overlay1 = document.getElementById('overlay1');
    const overlay2 = document.getElementById('overlay2');
    const description1 = document.getElementById("description1");
    const description2 = document.getElementById("description2");

    if (this.day === 1) {
      overlay1?.classList.remove('opacity-0');
      overlay1?.classList.add('opacity-90');
      overlay2?.classList.remove('opacity-90');
      overlay2?.classList.add('opacity-0');
   
      this.day = 0
    } else {
      overlay2?.classList.remove('opacity-0');
      overlay2?.classList.add('opacity-90');
      overlay1?.classList.remove('opacity-90');
      overlay1?.classList.add('opacity-0');
     
      this.day = 1
    }
  }

}
