// Задача 1
// let a=1;
// while (a<=20){
//     console.log(a);
//     a++;
// }

// Задача 2

// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');

// if ( a > 30 || b > 30 ){
//     alert('yes')
// }
// else{
//     alert('no')
// }

// Задача 3

// let a = +prompt('первое');
// let b = +prompt('второе');
// let c = +prompt('третье');
// if (a>10 && b>10 && c>10){
//     if(a % 3 == 0 && b % 3 == 0){
//         alert('yes')
//     }
//     else{
//         alert('no')
//     }
// }
// else{
//     alert('no')
// }


//Задача 4

// let n = +prompt('последнее число')
// let s = 0;
// for (let i = 1; i < n; i++){
//     s += i + n;
    
// }
// console.log(s)


// Задача 6

// let n = +prompt('Введите длину основания треугольника')
// let s ='';
// for (let i = 1; i <=n; i++){
//     s += 'A';
//     console.log(s);
// }


// Задача 7

  
// let arr = [];
// for (let i = 0; i < 9; i++) {
//     var matrix = getRandom();
//     arr.push(matrix);
//     document.write(arr[i]);

// let a = 'abcdefg'
// last = a.slice(-1)
// console.log(last)
// first = a.slice(0,1)
// console.log(first)
// if( a.length % 2 != 0){
//     let n = (a.length - 1) / 2;
//     console.log(a[n])

// }
  

// let a = prompt();
// if(a.startsWith('abc')){
//     n = a.replace('abc','www')
//     console.log(n)
// }
// else{
//     console.log( a + 'zzz')
// }


// Дана строка. Определите общее количество символов '+' и '-' в ней. А так же сколько таких символов, после которых следует цифра ноль.
// a = ('abc0-+');
// let n = 0;
// let p = 0;

// for (let i=0; i<a.length; i++){
//     if (a[i] == '+'){
//         n++
        
//     }
//     if (a[i] == '-'){
//         p++
        
//     }
    
//     if (a[i] == '0'){
//         k = a.indexOf('0')
//         k1 = a.slice(0,k)
//         k2 = k1.slice(-1)
//         console.log(k2)
//     }
//     else{
//         console.log('нулей нет')
//     }
// }
// console.log(p+n)

// 1 задание Удалите в строке все символы '!'

// let str = 'asd!asdf!adf!asdf!!!!'
// str = str.split('!').join('');
// alert(str);

//Задача 2 Дана строка, состоящая из слов, разделенных пробелами.

// Определите количество слов в строке.
// В данной строке вставить после каждого символа 'a' символ 'b'.
// Удалите 3 первых слова
// let n;
// let str = 'Larem ipsum cillum laborum'

// alert(str.split(' ').length)
// alert(str.replace('a','ab'))

// len = str.length;
// let element = '!'; index;

// for ( let i = 0; i < len; i++){
//     index = indexOf(' ')
//     alert(index)
// }
// alert(len)


// Задача 3
// email = 'admin@email.com'
// Дан email в строке. Определить, является ли он корректным

// наличие символа '@' и точки
// наличие не менее двух символов после последней точки

let main = 'admin@email.com'; j = 0; i = 0;
len = main.length;

while (i != '@'){
    if(main[i] == '@'){
        while(j != '.'){
            if(main[j] == '.'){
                alert('Почта введена правильно')
            }
            else{
                alert('Почта введена неправильно')
                j++
            }
            
            break;
        }
    
    }
    i++;
    break;

}

//Найти наибольший элемент массива

let arr = [1, 743, 35772 ,647, 7, 0 , 5737754, -4];
let max = arr.pop();
let min = max;
for (let i = 0 ;i < arr.length ; i++){
    if( max < arr[i]){
        max = arr[i]
    }
    if ( min > arr[i]){
        min = arr[i]
    }
}
sum = min + max;
console.log('Максимум равен '+max)
console.log('минимум равен '+min)
console.log('А сумма их равна '+ sum)


// Найдите произведение элементов массива с нечетными номерами.
let arr1 = [];
for (let j = 1; j < 100; j+=2){
        arr1.push(j)
}
let b = 1;
for (let k = 0; k < arr1.length ; k++){
    b *= arr1[k];
}
console.log(arr1)
console.log(b)

// В данной строке найти сумму цифр

// let str1 = 'asdfadad567474642hffh6';
// atr = str1.split('')
// let sum1 = 0;
// for (let l = 0; l < atr.length; l++){
//     if(Number.IsInteger(+atr[l])){
//         sum1 += +atr[l]
//     }
// }
// console.log(sum1)

// Преобразовать первые буквы городов в Заглавные

// let cities = 'минск москва брест';
// cities1 = cities[0].toUpperCase() + cities.slice(1);
// for (let o = 0; o < cities.length; o++){
//     if ( cities1[o] === ' '){
//         cities1[o+1].toUpperCase() + cities1.slice(o+2)
//     }
// }
// console.log(cities1)


let x = 'hello world';
z = x.capitalize()
console.log(z)




// все методы
// s.length
// s.startsWith()
// s.endsWith()
// s.replace()
// s.replaceAll()
// s.trim()
// s.slice()
// s.indexOf()
// s.icludes()
// padEnd, padStart