import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../Services/users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
activeUsers:string[]=[]
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.activeUsers= this.userservice.active
    
  }
  updateUser(id:number){
   this.userservice.setInactive(id)
  }

}
