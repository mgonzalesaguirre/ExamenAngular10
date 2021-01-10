import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthpageComponent } from './pages/authpage/authpage.component';

const routes: Routes = [
  {
    path: '',
    component: AuthpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
