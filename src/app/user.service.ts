import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  getUsers(){
    return this.users;
  }

  createUser(username: string, password: string){
    const user: User = {
      id: this.users.length + 1,
      username,
      password
   };
    this.users.push(user);
    alert('User created successfully');
  }

  editUser(oldUsername: string, newUsername: string){
    this.users.forEach(x =>  {
      x.username = x.username === oldUsername ? newUsername : x.username ;
    });
    alert('User edited if exists');
  }


  constructor() { }
}
