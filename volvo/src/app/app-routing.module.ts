import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { UsersComponent } from './users/users.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', redirectTo: '/uc', pathMatch: 'full' },
  { path: 'uc', component: UsersComponent },
  { path: 'edit', component: EditComponent },
  { path: 'edit/:id', component: EditComponent },
   { path: 'add', loadChildren: './add/add.modules#AddModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
