//Activity 1:Function Declaration
//Task:01
function isEven(num) {
    if ((num & 1) == 0) return 1;
    else {
        return 0;
    }
}
let n = 0;
if (isEven(n)) {
    console.log(`${n} is an Even number.`);
}
else {
    console.log(`${n} is an Odd number.`);
}


//Task:02
function calSquare(num) {
    return num * num;
}
let n1 = 2;
console.log(`Square of ${n1} = ${calSquare(n1)}`);

//Activity 2:Function Expression
//Task:03
const findMax = function (m, n) {
    (m > n) ? console.log(`Maximum of ${m} & ${n} is ${m}`) : console.log(`Maximum of ${m} & ${n} is ${n}`);
}
let m = 20, n2 = 5;
findMax(m,n2);

//Task:04
const strConcat = function (str1, str2) {
    return (str1 + str2);
}
let s1 = "Mostakin";
let s2 = "Mondal";
console.log(`Concatination of ${s1} & ${s2} = ${strConcat(s1, s2)}`);

//Activity 3: Arrow Function
//Task:05
const sum = (a,b) => {
    return a+b;
}
//const sum1 = (a,b) => a + b;
let a=2,b=5;
console.log(`Summation of ${a} & ${b} = ${sum(a,b)}`);

//Task:06
const check = (str, ch) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) return true;
    } return false;
}
let str = "Asfar";
let ch = 'a';
if (check(str, ch)) {
    console.log(`${ch} is present in ${str}`);
}
else {
    console.log(`${ch} is not present in ${str}`);
}

//Activity 4: Function Parameters and Default values
//Task:07
function mul(a, b = 2) {
    return a * b;
}
let a1 = 5;
console.log(`Product = ${mul(a1)}`);

//Task:08
const greet = (str, age = 20) => {
    return "Hello " + str + ".Your age is " + age;
}
let name1 = "Mostakin";
console.log(greet(name1));

//Activity 5: Higher-Order Function
//Task:09
function callFunctionNTimes(fun, n) {
    for (let i = 0; i < n; i++) {
        fun();
    }
}
const helloBolo = () => {
    console.log("Hello jiii!!!");
}
callFunctionNTimes(helloBolo, 3);

//Task:10
function valRes(val, res, a) {
    const value = val(a);
    return "Your result is " + res(value);
}
const addVal = (val) => (val + 2);
const getRes = (val) => val;
console.log(valRes(addVal, getRes, 1)); 

