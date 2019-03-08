import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShengService implements OnInit{
  //private sheng:any[]=['A省','B省'];
  private shi:any[]=[['A1市','A2市'],['B1市','B2市']];
  private qu:any[]=[['A11区','A12区'],['A21区','A22区'],['B11区','B12区'],['B21区','B22区']];

  constructor() {}

   ngOnInit(){}

 /* getSheng(){
    return this.sheng;
  }*/
  getShi(){
   
    return this.shi;
  }
  getQu(){
    return this.qu;
  }
}
 
