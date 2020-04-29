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
  constructor(private glob : GlobalService){this.data = this.glob.getData();}
   add(nama:string, penjelasan:string){
     let temp = {nama,penjelasan};
     this.glob.addData(temp);
   }
   view(){
     
   }
}
