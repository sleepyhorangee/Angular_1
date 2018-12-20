import { Component } from '@angular/core';

@Component({  // Component Decorator
  selector: 'app-root',  //Unique name that refrences the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { //the logic
  title = 'ng7';
}
