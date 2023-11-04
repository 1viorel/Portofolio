import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {
    // Add this code to scroll to the top when the page is reloaded
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    // Add this code to scroll to the top when the component is initialized
    window.scrollTo(0, 0);
  }
}
