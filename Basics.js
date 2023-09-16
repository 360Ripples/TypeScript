//ts is a superset of js.ts builds on top of js.compile the ts code into plain js code using a TypeScript compiler.
//Once you have the plain js code, you can deploy it to any environment that js runs.
//TypeScript uses the JavaScript syntaxes and adds additional syntaxes for supporting Types.
//both ts and js are case-sensitive
//shift+alt+F --> format code
//ts adds type to the js and helps you avoid potential bugs that occur at runtime.
//install nodejs, install ts compiler npm install -g typescript , tsc --v, npm install -g ts-node ( can use instead of installing ts)
// 1. create folder 
//2. create file with .ts
// 3. tsc app.ts  --> to compile 
//4. node app.js  --> to run
// can print in browser using open with live browser option
// js has dynamic type which provides flexibility but creats problem in runtim.
//primitive types: string,number,bigint,boolean,null,undefined- uninitialized,symbol-unique constant value
// object types: functions,arrays,classes
let values; // type annotations:give types explicitly;can use const
values = 12;
//values="Welcome";     //compilation error
let firstName = 'Deepika'; //double or single quotes
//Type Inference:no need to specify type explicitly
let price = 12.23;
//Number - stores decimal,octal,hexadecimal,float
let ovalue = 0o10;
let hvalue = 0XA;
//bigint -stores larger than 253 – 1
let bvalue = 234567897654334567865432145n; //should suffix n
//bigint literals are not available before ES2020 so use tsc --target ES2020 Basics.ts to compile this
//template strings - allows multiline strings and provides string interpolation features
let message = `Have
a 
good 
day`;
console.log(message);
let interdemo = `
Hi ${firstName},
       ${message}`;
console.log(interdemo);
//boolean:
let isIndian = true;
//boolean operators: AND &&, OR ||, NOT !
//Object:
let car = {
    brand: "Ford",
    year: 2021,
    color: "grey",
    price: 1200000
};
console.log(car);
car.color = "white";
console.log(car.price);
//to specify properties explicitly
let bike;
bike = {
    brand: "Honda",
    year: 2020,
    speed: 120
};
console.log(bike);
//array
let names = []; //= ['John', 'Jane', 'Peter', 'David', 'Mary'];
names[0] = 'Jack';
names.push("Tom");
//extract an element
//type inference
let s = names[0];
console.log(typeof (s));
console.log(names);
console.log(names.toString());
console.log(names.length);
let mapdemo = names.map(n => 'Hi ' + n);
console.log(mapdemo);
// forEach(),reduce(), filter()
//storing mixed types
let mixedvalues;
mixedvalues = ['Cat', 124, 'Birds', 'Dog', 444];
console.log(mixedvalues.toString());
//Tuples--> fixed no.of elements, type is known
let student;
student = [12, 'Marie', 23];
//with optional parameters
let student1;
student1 = [13, 'Sam'];
console.log(student1);
//Enum - group of named contant values
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
;
//enum members is both number and defined constant 
let day = days.Monday;
console.log(day);
let dayvalue = 2;
console.log(dayvalue);
//we can also specify the numbers for members explicitly;defaultly from 0
var department;
(function (department) {
    department[department["purchase"] = 1] = "purchase";
    department[department["Sales"] = 2] = "Sales";
    department[department["Marketing"] = 3] = "Marketing";
    department[department["HR"] = 4] = "HR";
})(department || (department = {}));
;
let employee = {
    id: 123,
    name: "john",
    dept: department.Sales
};
console.log(department.HR);
//any - when we dont know the type at the time of coding or value will be from third parties
//compiler skips type-checking
let anydemo;
anydemo = 1234;
anydemo = 'DD';
console.log(anydemo);
//void - can give only undefined
let voiddemo = undefined;
//never - cannot assign values; can be used as return type for function throws error.
//union
let uniondemo;
uniondemo = 12345;
uniondemo = 'Hello';
//uniondemo=true; //error
let dob = new Date(2021, 4, 21); //month will be taken as index(from 0)
let dateOnly = dob.toLocaleDateString();
console.log(dateOnly);
let alphavalue;
alphavalue = 1233;
alphavalue = 'World';
//alphavalue=true;  //error
//string literal type
let loanstatus;
loanstatus = 'approved';
//loanstatus="ABC";   //error
//control flow statements
let a = 30;
let b = 20;
if (a > b) {
    console.log(a + ' is greater');
}
if (a > b) {
    console.log(a + ' is greater');
}
else {
    console.log(b + ' is greater');
}
//ternary operator
let greater = a > b ? a + ' is greater' : b + ' is greater';
console.log(greater);
let value1 = 11;
value1 % 2 == 0 ? value1++ : value1;
console.log(value1);
//if else if
let bmi = 25;
let fitnesslevel;
if (bmi <= 18)
    fitnesslevel = 'Underweight';
else if (bmi > 18 && bmi < 25)
    fitnesslevel = 'Normal weight';
else if (bmi >= 25 && bmi < 30)
    fitnesslevel = 'Over Weight';
else
    fitnesslevel = 'Obese';
console.log(fitnesslevel);
//switch case
let dayinnumber = 5;
let dayinstring;
switch (dayinnumber) {
    case 1:
        dayinstring = 'Sunday';
        break;
    case 2:
        dayinstring = 'Monday';
        break;
    case 3:
        dayinstring = 'Tuesday';
        break;
    case 4:
        dayinstring = 'Wednesday';
        break;
    case 5:
        dayinstring = 'Thursday';
        break;
    case 6:
        dayinstring = 'Friday';
        break;
    case 7:
        dayinstring = 'Saturday';
        break;
    default:
        dayinstring = "Invalid Day Number";
}
console.log("Day in String-->" + dayinstring);
let groupcase;
switch (dayinnumber) {
    case 1:
    case 7:
        groupcase = 'Weekend';
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        groupcase = "Weekday";
        break;
    default:
        groupcase = 'Invalid day in number';
}
console.log("Group case -->" + groupcase);
//for loop
console.log("for loop");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
console.log("for loop with optional block");
//for loop with optional block with break
let j = 10;
for (;; j++) {
    if (j % 2 == 0)
        console.log(j);
    if (j == 25)
        break;
}
//while loop 
let counter = 1;
while (counter <= 10) {
    console.log("Iteration number " + counter);
    counter++;
}
console.log("Do while loop");
let counter1 = 12;
do {
    console.log("Counter value is " + counter1);
    counter1++;
} while (counter1 < 10);
//continue
let counter2 = 20;
while (counter2 >= 10) {
    counter2--;
    if (counter2 % 5 == 0)
        continue;
    console.log(counter2);
}
//Functions - building blocks of readable,maintainable and reusable code.
function isdivisible(dividend, divisor) {
    let result = dividend % divisor == 0;
    return result;
}
console.log(isdivisible(12, 3));
//function assigned to a variable
let square = function calcsquare(a) {
    return a * a;
};
console.log(square(9));
//function with optional parameter
//should be the last paramter
function calculateArea(length, width) {
    if (width) // or if(typeof width !='undefined')
        return length * width;
    else
        return length * length;
}
console.log("area calculation without width " + calculateArea(23));
console.log("area calculation with width " + calculateArea(12, 23));
//function with default parameter
function greeting(name, message = "Welcome") {
    return `hi ${name} ${message}`;
}
console.log(greeting('Sam', 'Good Morning'));
console.log(greeting('Ron'));
//rest parameters - accept 0 or more arg of specified type
//rules 1.only one  2.at last  3.array type
function sum(...paramvalues) {
    let add = 0;
    //return paramvalues.reduce((add,n)=>add+n);
    paramvalues.forEach(n => add += n);
    return add;
}
console.log("Rest Parameter ");
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(22, 33, 44));
function add(a1, a2) {
    if (typeof a1 === 'string' && typeof a2 === 'string')
        return a1.concat(a2);
    else if (typeof a1 === 'number' && typeof a2 === 'number')
        return a1 + a2;
    else
        return 0;
}
console.log(add(1, 2));
console.log(add('Hello', ' World'));
//method--> a function inside class
//class
class Employee1 {
    constructor(empid, empname, dept) {
        this.empid = empid;
        this.empname = empname;
        this.dept = dept;
    }
    displayEmployee() {
        console.log(`ID= ${this.empid} Name= ${this.empname} department= ${this.dept}`);
    }
}
let emp = new Employee1(221, 'Jai', 'Purchase');
emp.displayEmployee();
//access modifiers - change the visibility of variables and methods
//public, private and protected
//default is public 
//controls the access during compile time not run time
class Employee2 {
    constructor(empid, empname, dept) {
        this.empid = empid;
        this.empname = empname;
        this.dept = dept;
    }
    displayEmployee() {
        console.log(`ID= ${this.empid} Name= ${this.empname} department= ${this.dept} `);
    }
}
let emp2 = new Employee2(223, 'Jerry', 'HR');
//console.log(emp2.empid);   //Error
console.log(emp2.empname);
//console.log(emp2.dept);    //Error
emp2.displayEmployee();
class EmployeeChild extends Employee2 {
    constructor(empid, empname, dept) {
        super(empid, empname, dept); //calls constructor of super class
    }
    display() {
        console.log(this.dept);
        // console.log(this.empid);   //error as private
    }
    //OVERRIDING
    displayEmployee() {
        console.log(`Hi this is ${this.empname} from ${this.dept} department`);
    }
}
let emp3 = new EmployeeChild(888, 'Zara', 'Marketing');
emp3.displayEmployee();
emp3.display();
//READ ONLY PROPERTY - marks the property as immutable
//assignment can be done only in either declaration or constructor.
class Employee3 {
    constructor(salary) {
        this.salary = salary;
    }
    displaySalary() {
        // this.salary=30000;      //error
        console.log(`Salary = ${this.salary}`);
    }
}
let sal = new Employee3(12000);
sal.displaySalary();
//diff readonly and const
//1.readonly used for class prop and const for variables
//2.initialised in declaration or constructor of same class. const-in declaration
//GETTERS(accessors) AND SETTERS(mutators)
//to control the access properties of the class.
//we can validate 
//place cursor inside class and press ctrl+. and select from menu
class Employee4 {
    constructor(eid, eName, eAge) {
        this.eid = eid;
        this.eName = eName;
        this.eage = eAge;
    }
    get eid() {
        return this._eid;
    }
    set eid(value) {
        this._eid = value;
    }
    get eName() {
        return this._eName;
    }
    set eName(value) {
        this._eName = value;
    }
    get eage() {
        return this._eage;
    }
    set eage(value) {
        if (value >= 18 && value <= 58)
            this._eage = value;
    }
}
let emp4 = new Employee4(1, 'Tom', 12);
console.log(emp4.eage); //undefined
let emp5 = new Employee4(2, 'John', 23);
console.log(emp5.eage);
//STATIC PROPERTY - shared among all instances of a class.
//to access classname.propertyname
class Product {
    constructor(item, price) {
        Product.totalProducts++;
    }
    static staticDisplay() {
        console.log("This is the static method");
    }
}
Product.totalProducts = 0;
let product1 = new Product('laptop', 55000);
let product2 = new Product('Mobile', 12000);
let product3 = new Product('Mouse', 500);
console.log(`There are ${Product.totalProducts} products`);
Product.staticDisplay();
//ABSTRACT CLASS - to define common behaviours for derived class
//cannot be instantiated directly
//has one or more abstract methods (atleast one)
//has only method signature and not method implementation
class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    display() {
        console.log(`It is ${this.year} ${this.brand}`);
    }
}
class Car1 extends Vehicle {
    constructor(brand, year) {
        super(brand, year);
    }
    countWheels() {
        console.log("Four wheels");
    }
}
class Bike1 extends Vehicle {
    constructor(brand, year) {
        super(brand, year);
    }
    countWheels() {
        console.log("Two wheels");
    }
}
let carobj = new Car1("Ford", 2021);
carobj.countWheels();
carobj.display();
let bikeobj = new Bike1("Honda", 2019);
bikeobj.countWheels();
bikeobj.display();
function displayBook(details) {
    console.log(`The Book ${book.title} was written by ${book.author} was published on ${book.publishedDate.toLocaleDateString()} has ${book.pageCount} pages`);
}
let book = {
    title: "Java The Complete Reference",
    author: "Herbert",
    pageCount: 120,
    publishedDate: new Date(2020, 4, 5)
};
displayBook(book);
let addOperation = function (a, b) {
    return a + b;
};
let subOperation = function (a, b) {
    return a - b;
};
let addResult = addOperation(12, 34);
let subResult = subOperation(45, 32);
console.log(`Addition Result is ${addResult} 
Subtraction Result is ${subResult}`);
class Car2 {
    startEngine() {
        console.log("Car engine started");
    }
    stopEngine() {
        console.log("Car engine stopped");
    }
    accelerate(speed) {
        console.log("Car speed is " + speed + " km/hr");
    }
    brake() {
        console.log("Car Brake Applied");
    }
}
let carObject = new Car2();
carObject.startEngine();
carObject.accelerate(120);
carObject.brake();
class HeavyTruck {
    startEngine() {
        console.log("Heavy Truck Engine Started");
    }
    stopEngine() {
        console.log("Heavy Truck Engine Stopped");
    }
    accelerate(speed) {
        console.log("Heavy Truck Speed is " + speed + " kms/hr");
    }
    brake() {
        console.log("Heavy Truck Brake Applied");
    }
    loadCargo() {
        console.log("Goods loaded in Heavy Truck");
    }
    unloadCargo() {
        console.log("Goods unloaded from Heavy Truck");
    }
    getPayloadCapacity(capacity) {
        console.log("Heavy Truck Capacity is " + capacity);
    }
}
let heavyTruckObj = new HeavyTruck();
heavyTruckObj.startEngine();
heavyTruckObj.accelerate(120);
heavyTruckObj.loadCargo();
//INTERFACE EXTENDS CLASS
class Animal {
    makeSound() {
        console.log(" makes sound");
    }
}
class Dog extends Animal {
    play() {
        console.log("Dog Playing");
    }
}
//the following should not be allowed as
//interface can be implemented only by the class or subclass
//but it doesn't need to inherit explicitly.this is called as structural typing or "duck typing."
//class provides all needed implementations required for the interface so it is considered as valid implementation.
class Lion {
    play() {
        console.log("Lion playing");
    }
    makeSound() {
        console.log("lion sounds");
    }
}
let pwr = {
    name: 'Marie',
    age: 30,
    role: 'Manager'
};
//should give values for all properties
// can also use Person and Roles as interfaces
//interface Person{
//....}
console.log(pwr);
//TYPE GUARD - to narrow down the type of the variable
//operators - typeOf,instanceOf,in
class Laptop {
    constructor(brand) { }
}
class Mobile {
    constructor(model) { }
}
function findDevice(dev) {
    if (dev instanceof Laptop)
        console.log("Device is a Laptop");
    else if (dev instanceof Mobile)
        console.log("Device is a Mobile Phone");
}
let lap = new Laptop("Dell");
findDevice(lap);
//TYPE CASTING - using as keyword or <> operator
let n = "123456";
let stringn = n;
let len = stringn.length;
console.log(len);
console.log(n.length);
//TYPE ASSERTION - a form of type casting but used to provide hints to compiler
//about the expected type of a value when type inference is insufficient
//using as or <>
//Eg., same as type casting
//GENERICS
//use T for convention but can use A,B,C,etc
//used to develop reused, generalised and type-safe functions,interfaces and classes.
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
let numarray = [14, 33, 99, 63, 12];
console.log(findMax(numarray));
let stringarray = ["Apple", "Grapes", "Pineapple", "Banana", "Orange"];
console.log(findMax(stringarray));
function printItem(item) {
    item.print();
}
class Boook {
    constructor(title) {
        this.title = title;
    }
    print() {
        console.log(`Print book ${this.title}`);
    }
}
let newbook = new Boook("Java:A Beginner's Guide");
printItem(newbook);
let cityWithPopulation = {
    city: 'Chennai',
    population: 2000000
};
console.log(cityWithPopulation);
class CityPop {
    //constructor(C,P){}
    addCountry(country) {
        console.log(`Country ${country} is added`);
    }
    addPopulation(country, Popul) {
        console.log(`Population ${Popul} is added to the country ${country}`);
    }
}
let cityObj = new CityPop();
cityObj.addCountry("trichy");
cityObj.addPopulation("CBE", 200000);
//DEFAULT EXPORT
// only one allowed
let defexportvar = " Export Default";
//export default defexportvar;
// export class DDemo{
//  }; 
//EXCEPTION HANDLING
//7 types of errors
//1.RangeError - try to acces out of range
//2.Reference Error - access a variable without declaring it.
//3.Syntax Error
//4.Type Error - type mismatch
//5.URI Error - while encoding or decoding URI
//6.Eval Error - while using eval() for evaluating expressions
//7.Internal Error - occurs internally Eg., stack size increases to out of limit
//multiple catch allowed for single try
//EG1:
try {
    //some codes
    throw new ReferenceError("Refernce error thrown");
}
catch (error) {
    console.log("Error message " + error);
}
//EG2:
try {
    let nn = 12;
    if (nn < 10)
        throw new RangeError("Range Error Occurred");
    else if (nn > 10)
        throw new ReferenceError("Reference Error Occurred");
    console.log("Try Block Ended");
}
catch (error) {
    if (error instanceof RangeError)
        console.log("Error in example 2 " + error.message);
    else if (error instanceof ReferenceError)
        console.log("Error in example 2 " + error.message);
}
finally {
    console.log("Finally block...");
}
//Function within try
try {
    function addNumbers(a1, b1) {
        if (a1 > 10000 || b1 > 10000)
            throw new RangeError("Number invalid");
        else
            return a1 + b1;
    }
    console.log(addNumbers(1000000, 10)); //if invoked outside try,catch, lengthy exception will be displayed 
}
catch (error) {
    console.log("Error in example 3 " + error);
}
//export {};
