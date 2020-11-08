import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'malywebik';
  search = '';
  showHome = true;
  showAbout = true;
  showContacts = true;
  active = 'home';

  constructor(private router: Router) {
  }

  updateSearch(){
    if (this.search === ''){
      this.showHome = true;
      this.showAbout = true;
      this.showContacts = true;
    } else {
        this.showHome = 'home'.includes(this.search.toLowerCase());
        this.showAbout = 'about'.includes(this.search.toLowerCase());
        this.showContacts = 'contacts'.includes(this.search.toLowerCase());
    }
  }

  goHome(){
    this.router.navigateByUrl('');
    this.active = 'home';
  }

  goContact(){
    this.router.navigateByUrl('/contact');
    this.active = 'contact';
  }

  goAbout(){
    this.router.navigateByUrl('/about');
    this.active = 'about';
  }
}
