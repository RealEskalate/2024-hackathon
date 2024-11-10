import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { WinnerModalService } from 'src/app/shared/winner-modal.service';

@Component({
  selector: 'app-about-us',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  isWinnerModalOpen = false;
  modalData: any = {};
  modalSubscription: Subscription | undefined;

  constructor(private winnerModalService: WinnerModalService) {}

  ngOnInit(): void {
    this.modalSubscription = this.winnerModalService.isModalOpen$.subscribe((isOpen) => {
      this.isWinnerModalOpen = isOpen;
    });

    this.winnerModalService.modalData$.subscribe((data) => {
      this.modalData = data;
    });
  }

  scrollDown(): void {
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById('organizers');
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  closeModal() {
    this.winnerModalService.toggleModal(false);
  }
}
