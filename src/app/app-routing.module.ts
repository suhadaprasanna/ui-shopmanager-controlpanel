import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PanelComponent } from './component/panel/panel.component';


const routes: Routes = [
  {
    path : "",redirectTo : "/login", pathMatch : "full"
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"panel", component:PanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  LoginComponent,
  PanelComponent
]