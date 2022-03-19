import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers:string[]=[]
  constructor(private userService:UserService) {}

  ngOnInit(): void {
    this.inactiveUsers=this.userService.inactive
  }
  updateUser(id:number){
    this.userService.setActive(id)
   }

}
