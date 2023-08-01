//Basic Types
let id: number = 5;

let company: string = 'alidevs';
let isPublished: boolean = true;
let x: string = 'Hello';           // could be any type.
var toCall: string = 'ali';
let names: string[] = ['ali', 'khan']; // arrays in TS, only store elements of same datatypes.
let ids: number[] = [1, 2, 3, 4];
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
enum Dir {
    up = 1,
    down,
    left,
    right
}

// console.log(Dir.left);

//Objects
const user: {
    id: number,
    f_name: string,
    l_name: string,
} = {
    id: 1,
    f_name: 'John',
    l_name: 'Smith',
}
//---------OR----------//

type Intern = {
    id: number,
    f_name: string,
    l_name: string,
}

const intern: Intern = {
    id: 1,
    f_name: 'John',
    l_name: 'Smith',
}

// console.log(intern.id," ", intern.f_name);

//Type Assertion
let cid: any = 1;
let customerid = <number>cid;

//Functions
function addNum(x: number, y: number): number {
    return x + y;
}

// console.log(addNum(1.5,2));
//Void
function log(message: string | number): void {
    console.log(message);
}
// log('hello');

//Interfaces
interface userInterface {   //interface can't be used
    id: number,             //Unions.
    name: string,
    l_name?: 'string',   //Use "?" for optional elements
}

const user1: userInterface = {
    id: 1,
    name: 'Sam',
}
const user2: userInterface = {
    id: 2,
    name: 'Smith'
}

// console.log(typeof(user2.id));

//Interfaces with Functions

interface mathFunc {
    (a: number, b: number): number | string;
}

const add: mathFunc = (a, b): number => {
    return a+b;
}
const sub: mathFunc = (a, b): number => {
    return (a-b);
}

// console.log(sub(2,3));
// console.log(add(2,3));

//CLASSES

class Person {
    id: number
    name: string
    r_no?: number

    constructor (id: number, name: string, r_no: number) {
        this.id = id;
        this.name = name;
        this.r_no = r_no;
    }
}

const User = new Person(1, 'ali', 181);
const User2 = new Person(2, 'khan', 182);
console.log(User);
console.log(User2);