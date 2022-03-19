import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/users.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:{name:string,status:string}[]=[]
  activeusers:string[]=[]
  inactiveusers:string[]=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users= this.userService.users
    this.activeusers=this.userService.active;
    this.inactiveusers=this.userService.inactive
  }

}
