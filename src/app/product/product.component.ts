import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() custHome:any;
  @Output() custDisplay=new EventEmitter;
  @Output() prod1Data=new EventEmitter;
  fireprod1Data(value:any){
    this.prod1Data.emit(value);
}
  prod:string="Here are products";
  constructor() { }

  fireDisplayName(n:any){
                 this.custDisplay.emit(n);
            }
  ngOnInit(): void {
  }

}
