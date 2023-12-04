import { Component } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss'],
})
export class ProjectGalleryComponent {
  projects = [
    {
      title: 'Webapp 1',
      link: 'https://www.google.com',
      description:
        'This is a webapp This is a webapp This is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webapp',
      image: 'assets/images/placeholder.png',
    },
    {
      title: 'Webapp 2',
      link: 'https://www.google.com',
      description:
        'This is a webapp This is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webappThis is a webapp',
      image: 'assets/images/placeholder.png',
    },
    {
      title: 'Webapp 3',
      link: 'https://www.google.com',
      description: 'This is a webapp',
      image: 'assets/images/placeholder.png',
    },
  ];
}
