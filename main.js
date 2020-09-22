/*1. Напишіть функцію, що повертає куб числа.*/
console.log('-----TASK 1-----');

let cube = (a) => Math.pow(a,3);
console.log(cube(7));

/*
2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.*/
console.log('-----TASK 2-----');

let someOperation= (a,b,c) => (a + b) / c ;
console.log(someOperation(1,2,3));

/*
3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).*/
console.log('-----TASK 3-----');

let day = () => {
    num = +prompt('Input some number from 1 to 7');
    switch (num) {
        case 1:
            console.log('Понеділок');
            break;
        case 2:
            console.log('Вівторок');
            break;
        case 3:
            console.log('Середа');
            break;
        case 4:
            console.log('Четвер');
            break;
        case 5:
            console.log('Пятниця');
            break;
        case 6:
            console.log('Субота');
            break;
        case 7:
            console.log('Неділя');
            break;
        default:
            alert('wrong number!');
    }
}
day();

/*4. Реалізуйте функцію знаходження факторіала*/
console.log('-----TASK 4-----');

let factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n-1 );
    }
}
console.log(factorial(5));

/*5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.*/
console.log('-----TASK 5-----');

const secInHours = 3600;
const secInMin = 60;

let convertToSec = () => {
    let hours = +prompt('Input the count of hours');
    let minute = +prompt('Input the count of minutes');
    let second = +prompt('Input the count of seconds');
    let countOfSec = (hours * secInHours) + (minute * secInMin) + second;
    return countOfSec;
}
console.log(convertToSec());

/*6.Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".*/
console.log('-----TASK 6-----');


let convertToHMS = () => {
    let str = 'More than one day';
    let second = +prompt('Input the count of seconds');
    let minute , surrenderOfSec;
    let hours = Math.floor(second/secInHours);
    if (hours < 23) {
        let countOfSecond = second - (hours * secInHours);
        minute = Math.floor(countOfSecond/secInMin);
        if (minute < 59) {
            surrenderOfSec = countOfSecond - (minute * secInMin);
        }
        return `${hours} hours :${minute}minutes :${surrenderOfSec}seconds`;
    }
    else {
        return str;
    }
}
console.log(convertToHMS());

/*7. 4 відмінності ерров фанкшина від звичайної функції.*/

/*1) Перша, найбільш очевидна різниця цих типів функцій це синтаксис. У звичайних використовується зарезервоване слово
function (let fun = function(){...}, function fun(){...}),в той час як arrow функція об'являється досить просто:
function = () => {...}   */
/*2) Arrow function не може працювати з методом об'єкта this на відміну від звичайних функцій. Навіть якщо ми' +
' звертаємося до this, то функція "бере" це значення ззовні тіла функції. Зазвичай до глобального Window (але точно' +
' не пам'ятаю чи саме до нього),або до значення вище.*/
/*3) Також arrow функція не має змінної arguments.*/
/*4)Як наслідок того, що arrow функції не мають власного this вони не можуть бути використані для створення
 об'ектiв.Якщо спробувати викликати arrow функцію з використанням ключового слова new,error is coming =))*/
