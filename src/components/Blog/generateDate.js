import { timestamp } from '../../config/firebaseConfig';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const postedAt = new Date();
const year = postedAt.getFullYear();
const month = postedAt.getMonth();
const date = postedAt.getDate();
// const day = postedAt.getDay();
const hour = postedAt.getHours();
const minute = postedAt.getMinutes();
// const second = postedAt.getSeconds();

const postedAtDDMMYYYY = date + ' ' + monthNames[month] + ' ' + year;
let postedAtHHMM = '';
console.log('length', minute.toString().length);
if (minute.toString().length === 1) {
    postedAtHHMM = postedAtHHMM = hour + '.0' + minute;
    console.log('HHMM', postedAtHHMM);
} else
    if (minute.toString().length === 2) {
        postedAtHHMM = postedAtHHMM = hour + '.' + minute;
        console.log('HHMM', postedAtHHMM);
    }

export { postedAtHHMM, postedAtDDMMYYYY }