function Ladder(){
    this.step =0;
    this.up = function(){
        this.step++;
        return this
    }
    this.down = function(){
        this.step--;
        return this
    }
    this.showStep = function(){
        console.log(this.step)
        return this
    }
}
const ladder1 = new Ladder();
ladder1.up().up().down().showStep()
