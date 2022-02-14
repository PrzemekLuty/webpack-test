import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const firstName = "Przemek";
const age = 30;
console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lat.`);

const heading = document.querySelector(".main-heading--js");

console.log(heading.innerHTML);

function calculate(myNumber) {
    console.log(`Dostałem ${myNumber}`);
    myNumber = myNumber * 7;
    return myNumber;
}

const myResult =calculate(age);

console.log (myResult);

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent ('.experience__work--js', 'Podmianka')


if ('Java' != 'Javascript') {
console.log ('Java to nie Javascript')
} 


const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
const nav = document.querySelector('.navigation--js');
nav.classList.toggle('navigation--open');
})


const startOfDay = (moment().startOf('day').fromNow());

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;

let isDark = false;

const switchModes = document.querySelector('.mode--js');

switchModes.addEventListener('click', () => {
    if (isDark) {
        document.documentElement.style.setProperty('--background-color', '#fefefe');
        document.documentElement.style.setProperty('--text-color', '#333333');
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--background-color', '#333333');
        document.documentElement.style.setProperty('--text-color', '#fefefe');
        isDark = true;
    }
})