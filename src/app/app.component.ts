import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'malywebik';
  navVisible = false;
  changeNavVisib(){
    this.navVisible = !this.navVisible;
  }


  constructor() {
  }
}
