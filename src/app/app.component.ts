import { Component, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hasil=0
  pow(var1,var2){
  this.hasil = Math.pow(var1,var2);
  };
    
    polaA(var1,pow){
    for(var i= var1 ;i< pow;i++){
      for(var j = 0 ;j< i;j ++){
        document.write("x");
      }
      document.write("<br/>");
    }
  }   
   polaB(var2,pow){
    var counter = 1;
    for(var i= var2 ;i< pow ;i--){
      for(var j = 0 ;j< i;j ++){
        document.write("x");
      }
      document.write("<br/>");
    }
     var m = 0
      while( m < counter && counter <= pow ){
        m++;
        document.writeln("O")
      }
      document.writeln("<br/>");
      counter++;
    }
 }
