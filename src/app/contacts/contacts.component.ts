import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  text = '';
  email = '';
  name = '';
  submit(){
    console.log(this.email);
    console.log(this.name);
    console.log(this.text);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
