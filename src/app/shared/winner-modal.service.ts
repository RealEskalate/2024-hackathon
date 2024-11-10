import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "any", // Change from "root" to "any" to avoid singleton behavior across the entire app
})
export class WinnerModalService {
  private isModalOpenSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isModalOpen$: Observable<boolean> =
    this.isModalOpenSubject.asObservable();
  private modalDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public modalData$: Observable<any> = this.modalDataSubject.asObservable();

  constructor(private router: Router) {}

  toggleModal(open: boolean, data?: any, route?: string): void {
    if (route) {
      this.router.navigate([route]).then(() => {
        if (this.router.url === route) {
          this.isModalOpenSubject.next(open);
          if (data) {
            this.modalDataSubject.next(data);
          }
        }
      });
    } else {
      this.isModalOpenSubject.next(open);
      if (data) {
        this.modalDataSubject.next(data);
      }
    }
  }
}
