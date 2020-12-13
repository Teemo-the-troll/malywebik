import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username = '';
  password = '';

  createUser(){
    this.userSer.createUser(this.username, this.password);
  }

  constructor(private userSer: UserService) { }

  ngOnInit(): void {
  }

}
