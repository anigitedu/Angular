import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  city:string[]=["pune","Mumbai","jaipur"];

  info:any=[];
  onSubmit(value:any){
    alert("Form Submitted Successfully");
    console.log(value);
    this.info.push(value);
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
