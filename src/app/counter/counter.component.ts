import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter : number = 0;
  isEnable : boolean = false;
  buttonText : string = "Disable" ;
  constructor() { 
    this.counter=0;
    this.isEnable = false; 
    this.buttonText = "Disable";
  }
    
  ngOnInit(): void {
  }
  incrementCounter(){
    this.counter++;
  }
  decrementCounter(){
    if(this.counter>0){
      this.counter--;
    }
    else{
      this.counter=0;
    }
  }
  toggleCounter(){
    this.isEnable = ! this.isEnable;
    if(this.buttonText==="Disable")
    {
      this.buttonText="Enable";
    }
    else{
      this.buttonText="Disable";
    } 
  }
  setCounter(value:any){
    this.counter=Number(value.target.value);
    
  }
}
