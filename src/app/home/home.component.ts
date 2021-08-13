import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() custTitle:any;
  @Input() parentData:any;
  @Output() onDisplay=new EventEmitter;
  @Output() custDisplay=new EventEmitter;
  @Output() childData=new EventEmitter;
 
  fireDisplay(){
    this.onDisplay.emit();
  }
  fireDisplayName(n:any){
    this.custDisplay.emit(n);
  }
  fireChildData(value:any){
    this.childData.emit(value);
  }
  dname:string="";                     
            displayName(name:string){
                //alert(name);
                this.dname=name;
            }
  home:string="HOME COMPONENT";
  prod1:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
