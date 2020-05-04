import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{ GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute,private glob : GlobalService) {
    this.data = this.glob.getData();
    
   }

  ngOnInit() {
     //console.log('ya');
  }

}