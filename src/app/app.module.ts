import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InfoTextComponent,
    TimelineComponent,
    ContactComponent,
    NavbarComponent,
    ProjectGalleryComponent,
    TestimonialsComponent,
    ResumeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
