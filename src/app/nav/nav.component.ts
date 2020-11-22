import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  search = '';
  showHome = true;
  showAbout = true;
  showContacts = true;
  active = 'home';

  @Output() clickedHam: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  sideUpdate(){
    this.clickedHam.emit(null);
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

  ngOnInit(): void {
  }

}
