import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  quotes = [
    {
      author: 'Albert Einstein',
      position: 'Physicist',
      text: 'Imagination is more important than knowledge.',
    },
    {
      author: 'Nelson Mandela',
      position: 'Human Rights Activist',
      text: 'Education is the most powerful weapon which you can use to change the world.',
    },
    {
      author: 'Steve Jobs',
      position: 'Co-founder of Apple Inc.',
      text: 'Stay hungry, stay foolish.',
    },
    {
      author: 'Maya Angelou',
      position: 'Author and Poet',
      text: "Try to be a rainbow in someone's cloud.",
    },
    {
      author: 'Walt Disney',
      position: 'Entrepreneur and Animator',
      text: 'The way to get started is to quit talking and begin doing.',
    },
  ];
}
