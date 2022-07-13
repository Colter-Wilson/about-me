'use strict';

let siteVisitor = prompt('Whats your name?');
alert('Welcome ' + siteVisitor + ' try and guess these questions about me.')



let questionOne = prompt('Yes or no... Am I 22 years old?');

if(questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct!');
}
else if(questionOne === 'n' || questionOne === 'no'){
  alert('Sorry thats wrong.')
}
else{
  alert('answer with yes or no.');
}

let questionTwo = prompt('Yes or no... Do I live in Virginia');

if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('You are correct!')
}
else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('Sorry thats wrong.')
}
else{
  alert('answer with yes or no.')
}

let questionThree = prompt('Yes or no... Do I work at Franks Pizza?');

if(questionThree === 'y' || questionThree === 'yes'){
  alert('You are correct!')
}
else if(questionThree === 'n' || questionThree === 'no'){
  alert('Sorry thats wrong.')
}
else{
  alert('answer with yes or no.')
}

let questionFour = prompt('Yes or no... Do I know what I want to do with Computer Science?');

if(questionFour === 'y' || questionFour === 'yes'){
  alert('You are correct!')
}
else if(questionFour === 'n' || questionFour === 'no'){
  alert('Sorry thats wrong.')
}
else{
  alert('answer with yes or no.')
}

let questionFive = prompt('Yes or no... Did I go to Patrick Henry High School?');

if(questionFive === 'y' || questionFive === 'yes'){
  alert('You are correct!' + '' + siteVisitor)
}
else if(questionFive === 'n' || questionFive === 'no'){
  alert('Sorry thats wrong.' + '' + siteVisitor)
}
else{
  alert('answer with yes or no.' + '' + siteVisitor)
}
