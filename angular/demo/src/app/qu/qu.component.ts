import { Component, OnInit, Input, OnChanges, Output ,EventEmitter} from '@angular/core';
import { ShengService } from '../sheng.service';


@Component({
  selector: 'app-qu',
  templateUrl: './qu.component.html',
  styleUrls: ['./qu.component.scss']
})
export class QuComponent implements OnInit,OnChanges{
  private qus:any[];
  private Qus:any[];
  private quValue:string;
 @Input()
 shiValue:string;
 @Input()
 shengValue:string;
 @Output()
 Event3:EventEmitter<string>=new EventEmitter();

  constructor(private shengService:ShengService) { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.Qus=this.shengService.getQu();
    if(this.shiValue=="A1市"){
      this.qus=this.Qus[0]
    }else if(this.shiValue=="A2市"){
     this.qus=this.Qus[1]
   }else if(this.shiValue=="B1市"){
     this.qus=this.Qus[2]
   }else if(this.shiValue=="B2市"){
    this.qus=this.Qus[3]
  }
  }
 
  choose1(){
    if(this.shengValue.length<=2){
      return false;
    }
    else if(this.shengValue.length<=5){
      this.shengValue=this.shengValue+this.quValue;
    }else if(this.shengValue.length<=9){
      this.shengValue=this.shengValue.substring(0, 5)+this.quValue;
    }
    
    this.Event3.emit(this.shengValue);
    console.log(this.shengValue);
  }

}
