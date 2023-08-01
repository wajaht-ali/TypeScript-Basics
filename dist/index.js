"use strict";
//Basic Types
let id = 5;
let company = 'alidevs';
let isPublished = true;
let x = 'Hello'; // could be any type.
var toCall = 'ali';
let names = ['ali', 'khan']; // arrays in TS, only store elements of same datatypes.
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Hello'];
//Tuple:- 
let person = [1, 'Ali', true];
//Tuples Array:- 
let employee;
employee = [
    [1, 'ali'],
    [2, 'khan'],
    [3, 'sam'],
];
//Unions:- 
let pid = 2;
//Enum 
var Dir;
(function (Dir) {
    Dir[Dir["up"] = 1] = "up";
    Dir[Dir["down"] = 2] = "down";
    Dir[Dir["left"] = 3] = "left";
    Dir[Dir["right"] = 4] = "right";
})(Dir || (Dir = {}));
// console.log(Dir.left);
//Objects
const user = {
    id: 1,
    f_name: 'John',
    l_name: 'Smith',
};
const intern = {
    id: 1,
    f_name: 'John',
    l_name: 'Smith',
};
// console.log(intern.id," ", intern.f_name);
//Type Assertion
let cid = 1;
let customerid = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1.5,2));
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Sam',
};
const user2 = {
    id: 2,
    name: 'Smith'
};
const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return (a - b);
};
// console.log(sub(2,3));
// console.log(add(2,3));
//CLASSES
class Person {
    constructor(id, name, r_no) {
        this.id = id;
        this.name = name;
        this.r_no = r_no;
    }
}
const User = new Person(1, 'ali', 181);
const User2 = new Person(2, 'khan', 182);
console.log(User);
console.log(User2);
