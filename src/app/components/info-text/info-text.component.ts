import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.scss'],
})
export class InfoTextComponent implements OnInit {
  ngOnInit() {
    // Wait for the page to fully load and then remove the initial scaling
    window.addEventListener('load', () => {
      const zoomContainer = document.querySelector(
        '.zoom-container'
      ) as HTMLElement;
      zoomContainer.style.transform = 'scale(1)';
    });
  }
}
