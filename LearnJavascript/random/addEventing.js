function Foo(status) {
    this.status = status
    this.on = () => {this.status='registered event'}
}
//Foo.prototype.on=()=>{this.status='registered event'; console.log(this.status)}
//Foo.prototype.trigger=()=>{this.status='triggered event'}
//on=()=>{this.status='registered event'; console.log(this.status)};
trigger=(obj)=>{obj.status='deactivated event'}
let bar = new Foo('inactive');
console.log(bar.status);
//bar.on=on;
bar.on();
console.log(bar)
console.log(bar.status);
bar.trigger=trigger;
bar.trigger(bar);
console.log(bar)
console.log(bar.status);

function added() {
    console.log(this.status);
    this.status='added event';
}

added.call(bar);
console.log(bar.status);
//bar.added(bar);

// trigger.call(bar); // Not possible !! What !! Yes... Cant call an arraow function as the this refers to the closest scope (window) in case of arraow functions
console.log(bar.status);