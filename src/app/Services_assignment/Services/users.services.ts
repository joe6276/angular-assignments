import { Injectable } from "@angular/core"
import { CounterService } from "./counter.service"

@Injectable()
export class UserService{
    users=[
        {
            name:'Jonathan',
            status:'inactive'
        },
        {
            name:'Ndambukki',
            status:'inactive'
        },
        {
            name:'Grace',
            status:'active'
        },
        {
            name:'Purity',
            status:'active'
        }
    ]

    updateUser(id:number , newstatus:string){
        this.users[id].status=newstatus 
    }
constructor(private counter:CounterService){}
    inactive=['max','Sam']
    active=['maRk','Joe']

    setInactive(id:number){
        this.inactive.push(this.active[id])
        this.active.splice(id,1)
        this.counter.toinactives()
    }
    setActive(id:number){
        this.active.push(this.inactive[id])
        this.inactive.splice(id,1)
        this.counter.toactives()
    }
}