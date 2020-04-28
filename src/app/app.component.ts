import { Component } from '@angular/core';
import {Router} from '@angular/router';
import{ GlobalConstants } from './common/global-constants';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]

})

export class AppComponent  {
  name = 'Angular';
  nama:string = [];
  
  penjelasan :string[];
 

  constructor(private router : Router){}
   
    add(namaj, penj){
      GlobalConstants.nama.push(namaj);
      GlobalConstants.penjelasan.push(penj);
      this.nama = GlobalConstants.nama;
      this.penjelasan = GlobalConstants.penjelasan;
    }
}
