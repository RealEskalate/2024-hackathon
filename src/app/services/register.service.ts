import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private eligibilityCheckedSource = new BehaviorSubject<boolean>(false);
  eligibilityChecked$ = this.eligibilityCheckedSource.asObservable();

  private modalOpenSource = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpenSource.asObservable();

  checkEligibility() {
    this.eligibilityCheckedSource.next(true);
  }

  openModal() {
    this.modalOpenSource.next(true);
  }

  closeModal() {
    this.modalOpenSource.next(false);
  }
}
