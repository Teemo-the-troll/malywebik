import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'usercreate', component: UserCreateComponent},
  {path: 'about', component: AboutComponent},
  {path: 'useredit', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
