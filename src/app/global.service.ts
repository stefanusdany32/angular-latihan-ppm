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
  public change(temp1,temp2,temp3){
    temp2 = 'Nama Jurusan :' + temp2;
    temp3 = 'Penjelasan Jurusan :' + temp3;
    let isi = [temp2,temp3];
    this.data[temp1] = isi;
  }
}