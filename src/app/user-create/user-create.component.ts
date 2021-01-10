import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username = '';
  name = '';
  password = '';
  email = '';
  createUser(){
    this.userSer.createUser(this.username, this.name, this.email, this.password).subscribe(data => {
      console.log(data); }, error => {
      console.log(error); });
  }

  constructor(private userSer: UserService) { }

  ngOnInit(): void {
  }

}
