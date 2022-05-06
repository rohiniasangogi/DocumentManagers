import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './create-page/create-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecentPageComponent } from './recent-page/recent-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"start",
    component:SideBarComponent
  },
  {
    path:"recent",
    component:RecentPageComponent
  },
  {
    path:"update/:id",
    component:UpdateComponent
  },
  {
    path:"create",
    component:CreatePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
