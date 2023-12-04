import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.scss'],
})
export class InfoTextComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.getElementById('home');

    if (element) {
      const scrollY = window.scrollY;
      const maxScroll = 600; // Adjust this value to control the scroll distance at which the element becomes fully transparent
      const opacity = Math.max(1 - scrollY / maxScroll, 0); // Calculate the new opacity

      element.style.opacity = opacity.toString();

      if (opacity === 0) {
        element.style.transform = 'translateY(-100%)';
      } else {
        element.style.transform = 'translateY(0)';
      }
    }
  }
}
