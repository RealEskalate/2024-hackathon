import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FilledButtonComponent } from "./shared/filled-button/filled-button.component";
import { OutlinedButtonComponent } from "./shared/outlined-button/outlined-button.component";
import { StackedCardComponent } from "./shared/stacked-card/stacked-card.component";
import { HomeComponent } from "./components/home/home.component";
import { PrizesComponent } from "./components/prizes/prizes.component";
import { HeaderComponent } from "./shared/header/header.component";
import { BannerComponent } from "./shared/banner/banner.component";
import { PrizeCardComponent } from "./shared/prize-card/prize-card.component";
import { PotentialPartnersComponent } from "./components/potential-partners/potential-partners.component";
import { InfoComponent } from "./components/info/info.component";
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { JudgesComponent } from "./components/judges/judges.component";
// import { EligibilityComponent } from './pages/eligibility/eligibility.component';
import { BotComponent } from "./shared/bot/bot.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./shared/footer/footer.component";
// import { RegistrationComponent } from './shared/registration/registration.component';
import { BubbleComponent } from "./shared/bubble/bubble.component";
import { CountDownComponent } from "./shared/count-down/count-down.component";
import { TrackCardComponent } from "./shared/track-card/track-card.component";
import { MentorsRegistrationComponent } from "./shared/mentors-registration/mentors-registration.component";
import { SafePipePipe } from "./shared/safe-pipe.pipe";
import { AboutUsSectionComponent } from "./components/about-us-section/about-us-section.component";
import { GetInvolvedComponent } from "./shared/get-involved/get-involved.component";
import { AdvisorsRegistrationComponent } from "./shared/advisors-registration/advisors-registration.component";
import { WhatWeProvideComponent } from "./shared/what-we-provide/what-we-provide.component";
import { RegisterModalComponent } from "./shared/register-modal/register-modal.component";
import { TeamRegistrationComponent } from "./shared/team-registration/team-registration.component";
import { WorkshopComponent } from "./shared/workshop/workshop.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { QuarterComponent } from "./components/quarter/quarter.component";
import { Winners } from "./shared/winners/winners.component";
// import {PrivacyConsentComponent} from './privacy_consent/privacy-consent.component'
import { TrackWinners } from "./shared/track-winners/track-winners.component";
import { CloudinaryModule } from "@cloudinary/ng";
import { ConsentComponent } from "./privacy_consent/consent.component";
import { ConsentService } from "./privacy_consent/consent.service";
import { TermsPluginLoaderService } from "./privacy_consent/terms-plugin-loader.service";
import { WinnerModal } from "./shared/winner_modal/winner_modal.component";
import { Prize2024Component } from "./components/prize2024/prize2024.component";
import { LandingComponent } from "./components/landing/landing.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { ShareBtnComponent } from "./components/share-btn/share-btn.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { SharedModule } from "./shared/shared.module";
import { FixedEligiblityComponent } from "./components/fixed-eligiblity/fixed-eligiblity.component";
import { OrganizersComponent } from "./components/organizers/organizers.component";
import { ChatBotComponent } from "./shared/chat-bot/chat-bot.component";
import { HackathonHomeComponent } from "./pages/hackathon-home/hackathon-home.component";
import { BeASponsorComponent } from "./pages/be-asponsor/be-asponsor.component";
import { DonateComponent } from "./pages/donate/donate.component";
import { GetTicketsComponent } from "./pages/get-tickets/get-tickets.component";
import { EventProgramComponent } from "./pages/event-program/event-program.component";
import { ExpoPresentersComponent } from "./pages/expo-presenters/expo-presenters.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { SponsorContactComponent } from "./components/sponsor-contact/sponsor-contact.component";

import { SemiFinalistsComponent } from "./components/semi-finalists/semi-finalists.component";
import { CoreDevComponent } from "./components/core-dev/core-dev.component";
import { DonateCardComponent } from "./components/donate-card/donate-card.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { DonationCardComponent } from "./components/donation-card/donation-card.component";
import { Winners2024Component } from "./components/winners-2024/winners-2024.component";
import { HighlightsComponent } from "./pages/highlights/highlights.component";
// import AboutUsComponent from './pages/about-us/about-us.component'
// import { ShareButton } from 'ngx-sharebuttons/button';
 
@NgModule({
  declarations: [
    AppComponent,
    HackathonHomeComponent,
    BeASponsorComponent,
    DonateComponent,
    GetTicketsComponent,
    EventProgramComponent,
    ExpoPresentersComponent,
    FilledButtonComponent,
    OutlinedButtonComponent,
    StackedCardComponent,
    HomeComponent,
    PrizesComponent,
    HeaderComponent,
    BannerComponent,
    PrizeCardComponent,
    PotentialPartnersComponent,
    InfoComponent,
    JudgesComponent,
    // EligibilityComponent,
    BotComponent,
    FooterComponent,
    BubbleComponent,
    CountDownComponent,
    TrackCardComponent,
    MentorsRegistrationComponent,
    SafePipePipe,
    AboutUsSectionComponent,
    GetInvolvedComponent,
    AdvisorsRegistrationComponent,
    WhatWeProvideComponent,
    TeamRegistrationComponent,
    WorkshopComponent,
    ProjectsComponent,
    QuarterComponent,
    Winners,
    TrackWinners,
    ConsentComponent,
    WinnerModal,
    Prize2024Component,
    LandingComponent,
    TimelineComponent,
    AboutUsComponent,
    Winners2024Component,
    HighlightsComponent
  
     // NgxMatIntlTelInputComponent
    // RegistrationComponent,
    // ShareButton
    // PrivacyConsentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloudinaryModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ShareBtnComponent,
    CarouselModule,
    RegisterModalComponent,
    SharedModule,
    FixedEligiblityComponent,
    OrganizersComponent,
    ChatBotComponent,
    SponsorContactComponent,
    // MatInputModule,
    // NgxMatIntlTelInputComponent
    SemiFinalistsComponent,
    CoreDevComponent,
    DonateCardComponent,
    ContactUsComponent,
    DonationCardComponent,
    ReactiveFormsModule,
  ],
  providers: [ConsentService, TermsPluginLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
