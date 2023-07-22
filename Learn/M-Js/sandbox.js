// alert('hello, world');

// console.log(1);
// console.log(2);

// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// points = 50;
// console.log(points);

// var score = 75;
// console.log(score);

// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// points = 50;
// console.log(points);

// var score = 75;
// console.log(score);

// // strings
// console.log('hello, world');

// let email = 'mario@thenetninja.co.uk';
// console.log(email);

// // string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// // getting individual characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLocaleLowerCase();
// console.log(result);

// let index = email.indexOf('@');
// console.log('index of the @ sign:', index);

// // numbers

// let radius = 10;
// let pi = 3.14;

// // console.log(radius, pi);

// // math operators - +, -, *, /, **, %

// // console.log(10 / 2);
// // let result = radius % 3;
// // let result = pi * radius**2;

// // order of operation - B I D M A S

// // let result = 5 * (10 - 3)**2;

// // console.log(result);

// // shorthands
// let likes = 10;

// // likes = likes + 1;
// // likes++;

// // likes = likes + 10;
// // likes += 10;

// // likes *= 2;
// // likes /= 2;

// // console.log(likes);

// // NaN - not a number

// // console.log(5 / 'hello');
// // console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes.';
// console.log(result);

// // else if statements
// const password = 'p@ss12';

// if(password.length >= 12 && password.includes('@')){
//   console.log('that password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//   console.log('that password is strong enough');
// } else {
//   console.log('that password is not strong enough');
// }

// // Logical NOT
// const user = false;

// if(!user){
//   // do something
//   console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);

// // switch statements
// const grade = 'D';

// switch(grade){
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got a B!');
//     break;
//   case 'C':
//     console.log('you got a C!');
//     break;
//   case 'D':
//     console.log('you got a D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }

// // using if statements
// // if(grade === 'A'){

// // } else if(grade === 'B'){

// // } else if(grade === 'C'){

// // } else if(grade === 'D'){

// // } else if(grade === 'E'){

// // } else {

// // }

// // function declaration
// function greet(){
//     console.log('hello there');
//   }
  
//   // function expression
//   const speak = function(){
//     console.log('good day!');
//   };
  
//   // greet();
//   // greet();
  
//   speak();

// // return statements

// // const speak = function(name, time){
// //   console.log(`good ${time}, ${name}!`);
// // };

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
//   }
  
//   const area = calcArea(5);
//   console.log('area is:', area);

// //get a reference to the 'ul'

// const ul = document.querySelector('.people');

// const people = ['Ayush', 'Ayub', 'Yugen', 'Aryan', 'Piyang'];

// let html = ``;

// // people.forEach(function(person){
// //     // create html template

// //     html += `<li style = "color: purple;">${[person]}</li>`
// // });

// people.forEach(person =>{
//     // create html template

//     html += `<li style = "color: purple;">${[person]}</li>`
// });

// console.log(html);
// ul.innerHTML = html;

// object literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
//   };
  
//   console.log(user);
//   console.log(user.age);
  
//   user.age = 35;
//   console.log(user.age);
  
//   console.log(user['name']);
//   user['name'] = 'chun-li';
//   console.log(user['name']);
  
//   console.log(typeof user);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//       console.log('the user logged in');
//     },
//     logout: function(){
//       console.log('the user logged out');
//     },
//     logBlogs: function(){
//       // access the blogs here
//     }
// };

// user.login();
// user.logout();
  
// const name = 'shaun';
// name.toUpperCase();

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login(){
//       console.log('the user logged in');
//     },
//     logout(){
//       console.log('the user logged out');
//     },
//     logBlogs(){
//       // access the blogs here
//       // console.log(this);
//       console.log('this user has written these blogs:');
//       this.blogs.forEach(blog => {
//         console.log(blog);
//       })
//     }
//   };
  
//   user.logBlogs();
//   // console.log(this);

// // Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// // primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// // reference values

// userOne = { name: 'ryu', age: 30 };
// userTwo = userOne;
// console.log(userOne, userTwo);

// userOne.name = 'chun-li';
// console.log(userOne, userTwo);

// // DOM

// // const para = document.querySelector('p');
// // const para = document.querySelector('.error');
// const para = document.querySelector('div.error');

// console.log(para);

// // query multiple elements at once
// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(paras, errors);
// console.log(paras[1], errors[0]);

// // get an element by ID
// const title= document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// // get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText = 'ninjas are awesome';

// const paras = document.querySelectorAll('p');

// // paras.forEach(p => {
// //   console.log(p.innerText);
// //   p.innerText = 'new text!';
// // });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);
// // content.innerHTML = '<h2>this is a new h2</h2>';

// // content.innerHTML += '<h2>this is an h2 added to the content</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });


// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.textContent = 'The Net Ninja webiste';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green');


// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';


// // const content = document.querySelector('p');

// // console.log(content.classList);
// // content.classList.add('error');
// // content.classList.remove('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   if(p.textContent.includes('error')){
//     p.classList.add('error');
//   } else if(p.textContent.includes('success')) {
//     p.classList.add('success');
//   }
// });


// const article = document.querySelector('article');

// // console.log(article.children);
// // console.log(Array.from(article.children));
// // console.log(article.children);

// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// // chaining
// console.log(title.nextElementSibling.parentElement.children);


