import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'documenr_manager';
  view= true;
  changeView(){
    this.view=false;
    
  }
}
