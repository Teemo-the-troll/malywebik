import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

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
  showUsercreate = true;
  showUseredit = true;
  active = 'home';

  @Output() clickedHam: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private userService: UserService) { }

  sideUpdate(){
    this.clickedHam.emit(null);
  }


  updateSearch(){
    if (this.search === ''){
      this.showHome = true;
      this.showAbout = true;
      this.showContacts = true;
      this.showUsercreate = true;
    } else {
      this.showHome = 'home'.includes(this.search.toLowerCase());
      this.showAbout = 'about'.includes(this.search.toLowerCase());
      this.showContacts = 'contacts'.includes(this.search.toLowerCase());
      this.showUsercreate = 'create user'.includes(this.search.toLowerCase());
      this.showUseredit = 'edit user'.includes(this.search.toLowerCase());
    }
  }

  goUseredit(){
    this.router.navigateByUrl('/useredit');
    this.active = 'useredit';
  }
  goHome(){
    this.router.navigateByUrl('');
    this.userService.updateUsers();
    this.active = 'home';
  }

  goContact(){
    this.router.navigateByUrl('/contact');
    this.active = 'contact';
  }

  goUsercreate(){
    this.router.navigateByUrl('/usercreate');
    this.active = 'usercreate';
  }

  goAbout(){
    this.router.navigateByUrl('/about');
    this.active = 'about';
  }

  ngOnInit(): void {
  }

}
