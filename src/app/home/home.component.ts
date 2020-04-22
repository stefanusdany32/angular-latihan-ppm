import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
 nama = [];
  
  penjelasan =[];
 
  ngOnInit() {
   
    this.nama = ['infor','hotel'];
    this.penjelasan = ['Halo','halo'];
    //name.push('hotel');
     }

}