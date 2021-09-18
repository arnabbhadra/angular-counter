import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-bar',
  templateUrl: './heading-bar.component.html',
  styleUrls: ['./heading-bar.component.css']
})
export class HeadingBarComponent implements OnInit {
  heading = "Zopsmart Counter";
  description = "A Zopsmart counter helps to keep track your counting. Reset, increment and Decmrement as well as customization helps to use effectively.";
  constructor() { }

  ngOnInit(): void {
  }

}
