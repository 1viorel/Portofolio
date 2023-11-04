import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  footerVisible = false;
  threshold = 500; // Adjust this value as needed

  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.footerVisible = scrollPosition > this.threshold;
  }
}
