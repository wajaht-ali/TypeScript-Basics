//Basic Types
let id: number = 5;

let company: string = 'alidevs';
let isPublished: boolean = true;
let x: string = 'Hello';           // could be any type.
var toCall: string = 'ali';
let names: string[] = ['ali', 'khan']; // arrays in TS, only store elements of same datatypes.
let ids: number[] = [1,2,3,4];
let arr: any[] = [1, true, 'Hello'];


//Tuple:- 
let person: [number, string, boolean] = [1, 'Ali', true];

//Tuples Array:- 
let employee: [number, string][];
employee = [
    [1, 'ali'],
    [2, 'khan'],
    [3, 'sam'],
];

//Unions:- 
let pid: string | number = 2;

//Enum 
enum Direction  {
    up = 'up', 
    down = 'down',
    left = 'left',
    right = 'right',
}

console.log(Direction.up);