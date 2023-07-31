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
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up);
