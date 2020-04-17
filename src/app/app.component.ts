import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpg',
      username: 'nature',
      content: 'I saw this Snowy Mountain today'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpg',
      username: 'nature',
      content: 'Biking'
    },
  ]

}
