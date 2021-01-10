import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ip = 'http://localhost:4200/mujwebik2/api/';
  private users: User[] = [];
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUsers(){
    return this.users;
  }

  updateUsers(){
    const url = this.ip + 'user';
    this.http.get(url).subscribe(data => {
      this.users = data;
       });
  }

  createUser(username: string, name: string, email: string, password: string){
    const url = this.ip + 'authentication/register';
    const u: User = {
      name: name,
      email: email,
      username: username,
      password: password
    };
    console.log(u);
    return this.http.post(url, u);
  }

  editUser(oldUsername: string, newUsername: string){
  const url = this.ip + '';
  return this.http.put(url, null, null);
  }
}
