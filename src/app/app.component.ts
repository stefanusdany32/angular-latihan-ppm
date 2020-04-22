import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]

})

export class AppComponent  {
  name = 'Angular';
  nama = [];
  
  penjelasan :string[];
 

  constructor(private router : Router){}
   
    add(namaj, penj){
      this.nama.push[namaj];
      this.penjelasan.push(penj);
      this.router.navigate(['/home',this.nama]);
       this.router.navigate(['/home',this.penjelasan]);
    }
}
