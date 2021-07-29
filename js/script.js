
let am = (y) => /\d*1\d$/.test(y) || /[05-9]$/.test(y) ? 'лет' : ( /1$/.test(y) ? 'год' : 'года');

let years = parseInt(prompt('Сколько Вам лет?'));
alert(`Вам ${years} ${am(years)}`);