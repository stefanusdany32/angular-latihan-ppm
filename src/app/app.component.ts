import { Component } from '@angular/core';
import {Router} from '@angular/router';
import{ GlobalService } from './global.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]

})

export class AppComponent  {
  name = 'Angular';
  data : any;
  constructor(private route : Router, private glob : GlobalService){
    
  }
   add(nama:string, penjelasan:string){
     let temp1 = 'Nama Jurusan :' + nama;
     let temp2 = 'Penjelasan Jurusan :' + penjelasan;
     let temp = [temp1,temp2];
     this.glob.addData(temp);
   }
   view(){
     this.route.navigate(['/home']);
   }
}
