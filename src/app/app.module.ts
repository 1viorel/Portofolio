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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InfoTextComponent,
    TimelineComponent,
    ContactComponent,
    NavbarComponent,
    ProjectGalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
