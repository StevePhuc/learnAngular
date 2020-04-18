import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpg',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpg',
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpg',
    },
  ]

}
