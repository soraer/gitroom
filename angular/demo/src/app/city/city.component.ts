import { Component, OnInit } from '@angular/core';
import { ShengService } from '../sheng.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  //styleUrls: ['./city.component.scss']
  styleUrls: ['../app.component.scss']
})
//从服务器抓取数据
export class CityComponent implements OnInit {

  shengOb:Observable<any>;

  private shengs:any[];

  private shengValue:string="A省";
  private shiValue:string;
  constructor(private shengService:ShengService,private routerConfig:Router,public http: HttpClient) { 
    this.shengOb=this.http.get('/api').pipe(map(response=>response));
  }

  ngOnInit() {
   this.shengOb.subscribe(data=>{this.shengs=data});
  }
 getData(event){
    this.shiValue=event;
  }
  getShi(event){
    this.shengValue=event;
  }
  getQu(event){
    this.shengValue=event;
  }
}
//从本地抓取数据
/*export class CityComponent implements OnInit {
  private shengs:any[];
  private shengValue:string="A省";
  private shiValue:string;
  constructor(private shengService:ShengService,private routerConfig:Router) { 
  }

  ngOnInit() {
    this.shengs=this.shengService.getSheng();
  }
 getData(event){
    this.shiValue=event;
  }
  getShi(event){
    this.shengValue=event;
  }
  getQu(event){
    this.shengValue=event;
  }
} */
