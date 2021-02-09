var events = require('events');
const { prependOnceListener } = require('process');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var bread = new Person('bread');
var banana = new Person('banana');
var apple = new Person('apple');
var stuffs = [bread, banana, apple];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' fruit: ' + mssg);
    });
)};


bread.emit('speak', 'hey guys');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
     console.log(mssg);
});

myEmitter.emit('someEvent', 'The event was emitted');
