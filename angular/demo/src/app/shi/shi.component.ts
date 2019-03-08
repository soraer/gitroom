import { Component, OnInit, Input, OnChanges, Output,EventEmitter} from '@angular/core';
import { ShengService } from '../sheng.service';



@Component({
  selector: 'app-shi',
  templateUrl: './shi.component.html',
  styleUrls: ['./shi.component.scss']
})
export class ShiComponent implements OnInit,OnChanges {
  private Shis:any[];
  private shis:any[];
  private shiValue:string;

  
  @Input()
  shengValue:string;
 
  @Output()
  Event1:EventEmitter<string>=new EventEmitter();

  @Output()
  Event2:EventEmitter<string>=new EventEmitter();

  constructor(private shengService:ShengService) { }

  ngOnInit() {}

  ngOnChanges(){
    this.Shis=this.shengService.getShi();
    
  if(this.shengValue=="A省"){
      this.shis=this.Shis[0]
    }else if(this.shengValue=="B省"){
     this.shis=this.Shis[1]
   }else if(this.shengValue=="C省"){
     this.shis=this.Shis[2]
   }
  }

 choose(){
  this.Event1.emit(this.shiValue);
  if(this.shengValue.length<=2){
    this.shengValue=this.shengValue+this.shiValue;
   }else if(this.shengValue.length<=5 || this.shengValue.length>5){
    this.shengValue=this.shengValue.substring(0,2)+this.shiValue;
   }
  this.Event2.emit(this.shengValue);
  console.log(this.shengValue);
}

}
