import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private modalOpenSource = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpenSource.asObservable();

  private eligibilityCheckedSource = new BehaviorSubject<boolean>(false);
  eligibilityChecked$ = this.eligibilityCheckedSource.asObservable();

  openModal() {
    this.modalOpenSource.next(true);
  }

  closeModal() {
    console.log("yes close modal is clicked");
    
    this.modalOpenSource.next(false);
  }

  // setEligibilityChecked(isChecked: boolean) {
    
  //   this.eligibilityCheckedSource.next(isChecked);
  // }
  checkEligibility() {
    console.log("yes I am service");
    
    this.eligibilityCheckedSource.next(true);
  }
}
