import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4even',
  templateUrl: './assignment4even.component.html',
  styleUrls: ['./assignment4even.component.css']
})
export class Assignment4evenComponent implements OnInit {
 @Input() number?:number

 output:string=''
  constructor() { }

checkEven(numbers:number){
return numbers%2==0
}

  ngOnInit(): void {
  }

}
