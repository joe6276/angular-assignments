

export class CounterService{

    toactive:number=0;
    toinactive:number=0
    toa=0;
    toia=0;


    toactives(){
        this.toactive++
        this.toa=this.toactive;
        console.log(this.toactive);
        
    }
    toinactives(){
        this.toinactive++
        this.toia=this.toinactive
        console.log(this.toinactive);
    }
}