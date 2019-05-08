import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon Premier Post',
      content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Mon deuxième Post',
      content: 'éteintis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Encore un Post',
      content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500sint',
      loveIts: 0,
      created_at: new Date(),
    }
  ];

}
