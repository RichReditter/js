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

let n = +prompt('последнее число')
let s = 0;
for (let i = 1; i < n; i++){
    s += i + n;
    
}
console.log(s)


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