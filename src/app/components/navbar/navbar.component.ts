import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  footerVisible = false;
  threshold = 300; // Adjust this value as needed
  currentTime: string | undefined; // Property to hold the current time

  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleScroll);
    this.updateCurrentTime(); // Initialize the current time
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.footerVisible = scrollPosition > this.threshold;
  }

  // Function to update the current time
  updateCurrentTime() {
    const bucharestTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Bucharest',
      timeStyle: 'short',
      hour12: true,
    }).format(new Date());

    this.currentTime = bucharestTime;

    // Update the current time every minute
    setTimeout(() => this.updateCurrentTime(), 60000);
  }
}
