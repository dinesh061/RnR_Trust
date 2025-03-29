// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isActive: boolean = false;
  showmenu(){
     if(this.isActive){
      this.isActive=false;
     }
     else{
      this.isActive=true
     }
  }
  
}
