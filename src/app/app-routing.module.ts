import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
// import {HomeComponent} from "./pages/home/home.component";
import { Prize2024Component } from './components/prize2024/prize2024.component';
import { LandingComponent } from './components/landing/landing.component';
import { InfoComponent } from './components/info/info.component';
import { HackathonHomeComponent } from './pages/hackathon-home/hackathon-home.component';
import { EventProgramComponent } from './pages/event-program/event-program.component';
import { GetTicketsComponent } from './pages/get-tickets/get-tickets.component';
import { BeASponsorComponent } from './pages/be-asponsor/be-asponsor.component';
import { ExpoPresentersComponent } from './pages/expo-presenters/expo-presenters.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DonateComponent } from './pages/donate/donate.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';

const routes: Routes = [
  { path: '', redirectTo: '/hackathon-home', pathMatch: 'full' },
  { path: 'hackathon-home', component: HackathonHomeComponent },
  { path: 'event-program', component: EventProgramComponent },
  { path: 'get-tickets', component: GetTicketsComponent },
  { path: 'be-a-sponsor', component: BeASponsorComponent },
  { path: 'expo-presenters', component: ExpoPresentersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'highlights', component: HighlightsComponent}
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',

  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
