// timeline.component.ts
import { Component, OnInit } from '@angular/core';
import { years,timeline } from '../../static/years';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'] // Update the path accordingly
})
export class TimelineComponent implements OnInit {
  years: any[] = [];
  
  ngOnInit(): void {
    this.years = timeline ;
  }

  closeTimelineModal() {
    // Emit event or handle modal close
  }
}
