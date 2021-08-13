import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color:string[]=['red','blue','green','orange'];

  customer:any=[
    {"id":1,"name":"Animesh"},
    {"id":2,"name":"Alex"},
  ]
  showElement:boolean=true; 
  num1:number=20;
  num2:number=20;

  isLoggedIn:boolean=true;
  cone:boolean=true;          //For ngClass
  ctwo:boolean=false;

  size:string="30px";         //For ngStyle
  style:string="Italic";
  space:string="30px";

  toggle(){
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
}

}
