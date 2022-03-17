import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4odd',
  templateUrl: './assignment4odd.component.html',
  styleUrls: ['./assignment4odd.component.css']
})
export class Assignment4oddComponent implements OnInit {
@Input() number?:number
  constructor() { }

  checkOdd(numbers:number){
    return numbers %2 !==0
  }

  ngOnInit(): void {
  }

}
