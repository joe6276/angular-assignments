import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  display:boolean=true;
  text:string='+';
  answerbar:string="+"
  displayanwser:boolean=true
  constructor() { }
  getText(){
    this.display=!this.display
    return this.display? this.text='-': this.text='+'
  
  }
  getAnswer(){
    this.displayanwser=!this.displayanwser
    return this.displayanwser? this.answerbar= '-': this.answerbar='+'
  
  }
  ngOnInit(): void {
  }

}
