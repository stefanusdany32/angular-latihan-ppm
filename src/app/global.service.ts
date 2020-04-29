import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  public data =[];
  constructor() { }
  public addData(temp){
    this.data.push(temp);
  }
  public getData(){
    return this.data;
  }
}