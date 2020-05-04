import { Component, OnInit } from '@angular/core';
import{ GlobalService } from '../global.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
   data:any;
  constructor(private route:ActivatedRoute,private glob : GlobalService) {
    this.data = this.glob.getData();
    
  }
  ngOnInit() {
  }
  change(index : number,nama:string, penjelasan:string){
    let temp2 = nama;
    let temp3 = penjelasan;
    let temp1 = index;
    this.glob.change(temp1,temp2,temp3);
  }
}