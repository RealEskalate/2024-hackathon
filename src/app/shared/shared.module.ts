import { RegistrationComponent } from './registration/registration.component';
// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule],
  exports: [RegistrationComponent]
})
export class SharedModule {}
