import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.scss'],
})
export class InfoTextComponent implements OnInit {
  private lastScrollY = 0;
  private showImage = true; // Add a variable to control image visibility

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Wait for the page to fully load and then remove the initial scaling
    window.addEventListener('load', () => {
      const zoomContainer =
        this.el.nativeElement.querySelector('.zoom-container');
      zoomContainer.style.transform = 'scale(1)';
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const zoomContainer =
      this.el.nativeElement.querySelector('.zoom-container');
    const containerTop = zoomContainer.getBoundingClientRect().top;

    // Add or remove the 'fade-out' class based on the scroll direction
    if (window.scrollY > this.lastScrollY) {
      // Scrolling down
      zoomContainer.classList.add('fade-out');
    } else {
      // Scrolling up
      zoomContainer.classList.remove('fade-out');
    }

    this.lastScrollY = window.scrollY;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.showImage = window.innerWidth > 768; // Adjust the width as needed
  }
}
