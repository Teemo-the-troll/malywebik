import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  oldusername = '';
  newusername = '';
  id = 0;
  editUser() {
    this.userCrea.editUser(this.oldusername, this.newusername);
  }

  constructor(private userCrea: UserService) { }

  ngOnInit(): void {
  }

}
