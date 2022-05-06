import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomePage2Component } from './home-page2/home-page2.component';
import { RecentPageComponent } from './recent-page/recent-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    HomePage2Component,
    RecentPageComponent,
    CreatePageComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
