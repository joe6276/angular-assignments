import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4-parent',
  templateUrl: './assignment4-parent.component.html',
  styleUrls: ['./assignment4-parent.component.css']
})
export class Assignment4ParentComponent implements OnInit {
t:any
value:number=0;
end:string=''
  constructor() { }

  ngOnInit(): void {
  }
  getRandom():number{
    return Math.floor(Math.random()*101)
  }
  StartGame(){
  
   this.t=setInterval(this.getRandom, 3000);
   this.value= this.getRandom()
 
   
   
  }
  StopGame(){
    clearInterval(this.t);
    this.end="Game Over!"
    this.value=0
  }

}
