'use strict';

// command we can use to execute a set of steps

// Structure of a function
// function myFunction(parameters){code to execute}
// function userfav()

let message = ''
let ok

function customMessage(){
let inpt = prompt ('What is your favorite phenomena of the three?');

 if (inpt === '1') { message ='     Wow thats my favorite too!'
 }
 else if (inpt === '2'){
    message =  'Awesome! Did you know those are the only man made ones on this list.'
 }
 else if (inpt === '3') {message = 'Typical... I mean yay.... everyone loves this!'

 } 

else{
(message) = 'That is not a valid answer!'}
}


function ask(){
   let ques = prompt ('Did you already read the website before?')

   
   if (ques == 'yes') { customMessage();}
document.write ('I understand!  ');

if (ques == 'no') {message ='Please read the page and refresh!'};

if (ques == '') {message = 'Thats not a valid answer!'};


document.write(message);
}


document.write(message);
ask()
// //parameters
// function addTwoNumbers(num1, num2)
// {return num1 + num2; }
// //                              arguments
// let myNewNumber = addTwoNumbers (10,10)
// console.log(myNewNumber);







