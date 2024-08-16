
// Object Nesting
/*let friendOne = {
    firstName1 : `Adebayo`,
    lastName : `Lucas`,
    middleName :`Emmanuel`,
    complession : `Dark`,
    isStudent : false,
    canDrive: true,
    yearOfBirth : 1993,
    currentYear : 2024,
    state : `Ekiti`,
    girlFriend :{
        firstName : undefined,
        isStudent : false,
        canDrive: true,
        yearOfBirth : 1993,
        currentYear : 2024,
        state : `Ekiti`,

    },
    currentAge : function(){
        return this.currentYear - this.yearOfBirth;
    }

}*/

//Single Destructuring Method
/*const fatherOfLucas = {
    fatherFirstName : `Lucas`,
    fatherLastName : `Ogundele`,
    fatherMiddleName :undefined,
    fatherComplession : `Dark`,
    isStudent : false,
    canDrive: true,
    yearOfBirth : undefined,
    currentYear : 2024,
    state : `Ekiti`,
}

let {fatherFirstName} = fatherOfLucas;
console.log(fatherFirstName)*/

//Batch Destructuring Method
/*const motherOfLucas = {
    motherFirstName : `Hannah`,
    motherLastName : `Ogundele-Lucas`,
    motherMiddleName :`Omolabake`,
    motherComplession : `Chocolate`,
    isStudent : false,
    canDrive: true,
    yearOfBirth : undefined,
    currentYear : 2024,
    state : `Ekiti`,
}

let {motherFirstName, motherLastName, motherMiddleName, motherComplession} = motherOfLucas;
console.log(motherFirstName, motherLastName, motherMiddleName, motherComplession)*/

//Destructuring with Different Variable Names
/*const friendOfLucas = {
    friendFirstName : `Babatunde`,
    friendLastName : `Ayomide-Saka`,
    friendMiddleName :null,
    friendComplession : `Fair`,
    isStudent : false,
    canDrive: true,
    yearOfBirth : `23/08/1999`,
    currentYear : 2024,
    state : `Ogun`,
    gender : `Male`,
}

let {friendFirstName:personFirstName,friendLastName:personLastName, friendMiddleName:personMiddleName, friendComplession:personComplession, gender} = friendOfLucas;
console.log(personLastName,gender)*/

//Object Inherittance 
/*let sakaNin = {
    firstName : `Babatunde`,
    lastName : `Saka`,
    middleName : `Ayomide`,
    stateOfOrigin : `Ogun`,
    dateOfBirth : `23/09/2000`,
    nin : 909988333333,
}

const userOneDetails = Object.create(sakaNin)
userOneDetails.bvn = `123456789`,
userOneDetails.phoneNumber = `08136549028`,
userOneDetails.maritalStatus = `Single`,
userOneDetails.occupation = `UX Engineer`


console.log(userOneDetails)*/

//Functions(There are four ways to create functions in Javascript)
 //1. Function Declaration Method
 /*function myAge(){
    console.log(32)
 }
 myAge() //Calling the function

 //2. Function Expression Method
 let myName = function(){
    console.log(`Saka Babatunde Ayomide`)
 }

 myName()
 
 //3. Arrow Function Method (Modern Way ES6)
 const myPhone =() =>{
        console.log(`iPhone 11 Pro, 256GB`)
 }
myPhone()*/


//Function Parameters: There are two type of parameters, Basic and REST
//Basic Parameters Example 1
/*function greetingsFunctions(userName){
    let greetings = `Welcome back, ${userName}`;
    console.log(userName);
}

greetingsFunctions(`Ayomide`)
greetingsFunctions(`Aluko`)

//Basic Parameters Example 2
let welcomeFunction = function(){
    let yourName = prompt(`Please enter your name`);
    let welcomeMessage = `Welcome, ${yourName}`;
    console.log(welcomeMessage)
}

welcomeFunction()*/

//Basic Parameters Example 3
//Create a function that identifies the lowest score amont 5 scores

/*function minimumScore(score1, score2, score3, score4, score5){
        let minimum = Math.min(score1, score2, score3, score4, score5)
        console.log(minimum)
}

minimumScore(34,21,8,22,3)*/

//Basic Parameters Example 4
//Create a function that collects favourite vacation city of a user
/*function vacationCity(visitorName,vacationCity){
    let cityResult = `Hello ${visitorName}, your favourite vacation city is ${vacationCity}`
    console.log(cityResult)
}

vacationCity(`Josephine`,`Argentina`)*/

//REST Parameters Example 1
//Create a function that collects favourite vacation city of a user
/*function vacationCity(visitorName, ...vacationCity){
    let cityResult = `Hello ${visitorName}, your favourite vacation cities are ${vacationCity}`
    console.log(cityResult)
}

vacationCity(`Josephine`,`Argentina`, `Lagos`, `Accra`, `Osborne`, `Balose`)*/

//REST Parameters Example 1
//Create a function that collects favourite vacation city of a user

/*function iceCreamOrder(customerName, customerAddress, prefferedSize, flavor1, flavor2,...toppings){
    let order = `A customer with the name ${customerName} and address ${customerAddress} has the following order - cupsize: ${prefferedSize}. Flavor 1: ${flavor1}. Flavor 2 ${flavor2}. Toppings: ${toppings}`

    console.log(order)

}

iceCreamOrder(`Ayomide Saka`, `128 Jolape street`, `Medium size`, `Strawberry`, `Vanilla`, `Groundnut`, `Cashew Nuts`, `Biscuit`, `Cream`)*/

//String Function (Cheat Sheet)

//The ".length;" if run on a string is used to check the number of character in that string including space.

// The "charAt()" is used to read each individual character at a specific index in a string starting from zero

//The "concat()" method joins two strings

//The "indexOf()" method returns the location of the first position that matches a character

//The "lastIndexOf()" finds the last match, otherwise it works the same as indexOf()

//The "split()" method chops up the string into an array of sub-strings

// The "toUpperCase() and toLowerCase()" method changes a string...

//Introduction to Arrays

// const weekDays = [
//     `Monday`,
//     `Tuesday`,
//     `Wednesday`,
//     `Thursday`,
//     `Friday`,
//     `Saturday`,
//     `Sunday`
// ]
// // To access an item inside an Array
// let result = weekDays[0]
// console.log(result)

//Array Functions (Used to work with Arrays)
/*//Unshift Method - adds an item to the begining of an array
weekDays.unshift(`Weekdays`)
// console.log(weekDays)

// Shift - removes an item from the begining of an array 
weekDays.shift()
console.log(weekDays)

//The "push" method is used to add items to an array
// For Example
let clothes = []
clothes.push("Versace", "Gucci", "Louis Vuiton", "Balenciaga", "Nike");
clothes.pop(4);
console.log(clothes)

//The "pop()" method is used to remove items from an array
  clothes.pop(4);
console.log(clothes)

//Example 1
//Create an array that contains 3 bank customer records
let customersRecords =[
    {
        customerName : `Musa`,
        accountNumber : 1234556789,
        accountBalance : 9000,
    },
    {
        customerName : `Augustus`,
        accountNumber : 667788990,
        accountBalance : 60000,
    },
    {
        customerName : `Jew`,
        accountNumber : 112233221,
        accountBalance : 4000,
    }
   
 ]
//Add an addtional records to the array above using unshift (used for adding new people to the database)
customersRecords.unshift({
        customerName : `Loba`,
        accountNumber : 699843234,
        accountBalance : 200,
    
})
 console.log(customersRecords)*/

 //The "pop" method is used to remove an item at the end of an array
 //The "push" method is used to add a new an item to the end of an array
 //The "reverse" method makes the last become first (used to build social media post)
 //The "includes" method is used to check if an array include something
 //The "indexof" method is used to check the index postion of an item
 //The "lastIndexOf()" method is used to check the last index position of a particular item
 // The "slice()" method is used to take an item(s) out of an array (please note that slicing an item out of an array does not affect the array)
//the "splice" method is used to delete an item from an array
// The "join" method
// The "split" method is used to bounce a regular string to an array
// The "map" method
// the "filter" method is used to filter through an array for data



 //Example 2
//  const anotherArray =[
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     90,
//     5
//  ]

//  let outcome = anotherArray.splice(2,4)
//  console.log()



//For Loop
/*for (let x = 3; x <=10; x++){
  console.log (x)
}*/

//For loop using array
// const myArray = [`Joseph`,`Lookman`,`Ayonimofe`]

// for(i = 0; i < myArray.length; i++){
//    let result = myArray[i];
//    console.log(result)
// }


//For Each Loop Method
   /* const mySecondArray = [`Ajayi`,`Olugbon`,`Arewa`]
    mySecondArray.forEach(function(item, index, array){
    console.log(item, index, array)
})*/
 
//Conditionals (If Statement) - Single case comparison
 /*let a = 30
 let b = 10

 if(a < b){
    console.log(`This is true!`)
 }else{
    console.log(`This condition not true!`)
 }*/
  //Another Single Case Examples
 /*let userAge = prompt(`Enter your age`)
 let agreedAge = 18
 let userCity = prompt(`Enter your city`)
 let agreedCity = `London`

 if(userAge >= agreedAge && userCity === agreedCity){
    console.log(`let user in`)
 }else{
    console.log(`Ask user to come back when they're 18.`)
 }*/

     // Double Case Examples
 /*let userAge = prompt(`Enter your age`)
 let agreedAge = 18
 let userCity = prompt(`Enter your city`)
 let agreedCity = `London`

 if(userAge >= agreedAge && userCity === agreedCity){
    console.log(`let user in`)
 }else{
    console.log(`Ask user to come back when they're 18.`)
 }*/

//Ternary Operators for Single Case Comparison
 /*let a = 30
 let b = 10
 let result = a > b ? console.log(`Yes`) : console.log(`No`)*/

//Multi-case Comparison (Else If Statement) Example 1
/*let userAge2 = prompt(`Enter your age`)
agreedAge2 = Number(userAge2)

if(userAge2 > 0 && userAge2 <=12){
    console.log(`User is a Todller!`)
}else if(userAge2 > 12 && userAge2 <= 18){
    console.log(`User is a Teenager!`)
}else if(userAge2 > 18 && userAge2 <=40){
    console.log(`User is a Youth!`)
}else if(userAge2 > 40){
    console.log(`User is an Adult!`)
}else{
    console.log(`This age checker is not for you`)
}*/

//Multi-case Comparison (Else If Statement) Example 1
/*Question - School grading system
0 - 40 : Fail
40 - 60 : Pass
60 - 70 : Good 
70 - 80 : Very Good
80 - 100 : Excellent


let studentScore = prompt(`Enter your score`)
//The function to convert the input above to number
studentScore = Number(studentScore)

if(studentScore >= 0 && studentScore < 40){
        console.log(`Sorry, you Fail!`)
}else if(studentScore >= 40 && studentScore < 60){
        console.log(`Congratulations, you Pass!`)
}else if (studentScore >= 60 && studentScore < 70){
    console.log(`You are really Good!`)
}else if(studentScore >= 70 && studentScore <= 80){
    console.log(`Wow, you are Very Good!`)
}else if(studentScore >= 70 && studentScore <= 100){
    console.log(`You are an Excellent student!`)
}else{
    console.log(`Enter a valid score!`)
}*/

//Multi-case Comparison (Else If Statement) Example 2

//Array Topics (Splice - It can be used to replace an item in an array)

//Extract the account number and the acccount balance of a usr called Sandra in a database of a bank with 4 customers

 /*let bankCustomers =[
    {
        customerName : `Preye`,
        accountNumber : 1234556789,
        accountBalance : 2000,
    },
    {
        customerName : `Augustina`,
        accountNumber : 1234556789,
        accountBalance : 1000000,
    },
    {
        customerName : `Essien`,
        accountNumber : 1234556789,
        accountBalance : 234000,
    },
    {
        customerName : `Glow`,
        accountNumber : 1234556789,
        accountBalance : 2000,
    }
 ]
    for( let b = 0; b < bankCustomers.length; b++){
        if(bankCustomers[b].customerName === `Augustina`){
            console.log(`The customer name is ${bankCustomers[b].customerName}, the account number is  ${bankCustomers[b].accountNumber} and the account Balance is ${bankCustomers[b].accountBalance}`)  
        }
    }


 bankCustomers.forEach(function(item){
    if(item.customerName === `Essien`){
        let accountStatement = `The customer name is ${item.customerName}, the account number is  ${item.accountNumber} and the account Balance is ${item.accountBalance}`

        console.log(accountStatement)
    }
 })*/
 
//Nested For Loops
//Break and Continue
//While Loops
//Do while Loops
//For In Loop
//For of Loop

//Nested for Loops (Two Dimensional)
/*for(let x = 0; x < 10; x++){
    console.log(`Multiplication Table for ${x}`)

    for(let y = 0; y < 10; y++){
        console.log(y)
    }
}

//While Loops

let q = 0
while(q < 4){
    console.log(q)

    q++
}

const newarray  = [`Joel`, `Jumai`, `Efetobore`]
let z = 0

while( z < newarray.length){
    let result = `Hello ${z}`
    console.log(newarray)

    z++
}

//Do While Loops
 let b = 5
do{
    console.log(`YES!!!`)
    b++
}while(b < 2)


//For In Loop (Used to loop over object literals)
const newObject ={
    fullname :`Ayomide Saka`,
    locaion : `Nigeria`,
    studentStatus : false,
}

for(let anything in newObject){
    let result = newObject[anything]
    console.log(result)
}

// For of Loop

const cityArray =[`Oshogbo`, `Lagos`, `Accra`, `Los Angelis`]

for(let cityStorage of cityArray){
    console.log(cityStorage)

}*/
//Multi-case Comparison (If Statement using Switch)
/*let light = `off`;

switch(light) {
    case `green`:
        console.log(`Drive`);
        break;
    case `orange`:
        console.log(`Get ready`);
        break;
    case `red`:
        console.log(`Don't drive`);
        break;
    default:
        //this block will run if no condition matches
        console.log(`The light is not green, orange, or red`);
        break;
 }*/


//DOM = Document Object Model

const upGradeButton = document.getElementById("upgradeBtn")
upGradeButton.addEventListener("click", function(event){
     console.log(event)
})

//querySelector
//document.getElement

//Removing Attribute
//upGradeButton.removeAttribute("class")


