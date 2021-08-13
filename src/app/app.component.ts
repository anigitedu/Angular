import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string="Hello here again";
  Title:string="Property Binding";
  name:string="animesh";
  imgurl:string="assets/images/clouds-edit.jpg";
  //altTxt:string:"image";
  num:number=8.956;
  d=new Date();
  parent:string="ParentDATA";
  child:string="";
  
  display(){
    alert("Welcome to Angular");
  }
  display1(){
    alert("Here u go");
  }
  dname:string="";
  displayName(name:string){
    //alert(name);
    this.dname=name;
  }
  isTrue:boolean=false;
  second:boolean=true;
  applyBlue:boolean=false;
  rcolor:string="pink";
  bg:string="red";
  space:string="10px";
}
