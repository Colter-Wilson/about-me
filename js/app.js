'use strict';

let siteVisitor = prompt('Whats your name?');
alert('Welcome ' + siteVisitor + ' try and guess these questions about me.')


function howOld() {
let questionOne = prompt('Yes or no... Am I 22 years old?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  alert('You are correct!');
}
else if (questionOne === 'n' || questionOne === 'no') {
  alert('Sorry thats wrong.')
}
else {
  alert('answer with yes or no.');
}
}
howOld();

function Virginia() {
let questionTwo = prompt('Yes or no... Do I live in Virginia').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes') {
  alert('You are correct!')
}
else if (questionTwo === 'n' || questionTwo === 'no') {
  alert('Sorry thats wrong.')
}
else {
  alert('answer with yes or no.')
}
}
Virginia();

function work() {
let questionThree = prompt('Yes or no... Do I work at Franks Pizza?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes') {
  alert('You are correct!')
}
else if (questionThree === 'n' || questionThree === 'no') {
  alert('Sorry thats wrong.')
}
else {
  alert('answer with yes or no.')
}
}
work();

function compSci() {
let questionFour = prompt('Yes or no... Do I know what I want to do with Computer Science?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes') {
  alert('You are correct!')
}
else if (questionFour === 'n' || questionFour === 'no') {
  alert('Sorry thats wrong.')
}
else {
  alert('answer with yes or no.')
}
}
compSci();

function school() {
let questionFive = prompt('Yes or no... Did I go to Patrick Henry High School?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes') {
  alert('You are correct! ' + siteVisitor)
}
else if (questionFive === 'n' || questionFive === 'no') {
  alert('Sorry thats wrong. ' + siteVisitor)
}
else {
  alert('answer with yes or no. ' + siteVisitor)
}
}
school();

function numGuess() {
let myNumber = 6;

let userGuess = prompt('Guess what a number between 1 and 15');

let count = 0

while (count < 3 && userGuess != myNumber) {
  userGuess = prompt('Guess again');
  count = count + 1
}

if (userGuess == myNumber) {
  userGuess = alert('Nice guess');
}

if (count == 3 && userGuess != myNumber) {
  userGuess = alert('the right answer is 6');
}
}
numGuess();

function punch() {
let favoritePunch = ['jab', 'straight'];
 
for (let i = 0; i < 6; i++) {
    let userGuess2 = prompt('Guess my favorite punch');
    if(userGuess2 === favoritePunch[0] || userGuess2 === favoritePunch[1]){
    alert('thats correct');
    break; }
} 
}
punch();
//for (let j = 0; j < favoritePunch.length; j++) {
 // if(userGuess2 === favoritePunch[j])
 //{
  
  //score++;
  //i=100;
  //break;








