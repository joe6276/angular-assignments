import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {
  username:string='';
  clicker:boolean =true

  onButtonClick(){
    this.username=''
    this.clicker=true
  }
  add(){
    this.clicker=false
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
