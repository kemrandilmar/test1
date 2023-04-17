// console.log (Math.ceil(3.2) )
// console.log (Math.floor(3.2) )
// console.log (Math.round(3.2) )
// console.log (Math.pow(3,2) )
// console.log (Math.sqrt(64) )
// console.log (Math.random() *100)
// console.log (Math.round(Math.random() *100))
// let name = "Irina"
// let greeting = "hello "+ name +" we invite you"
// console.log(greeting) 

// let name = Sasha
// let greeting = ` hello ${name}we invite you`
// console.log (greeting)

// let str = "hello"
// let letter = "ф"
// if (str.indexOf(letter) === -1){
//     console.log("не встречается");}
// else if (str.indexOf(letter) === str.lastIndexOf(letter)){
//         console.log("встречается только 1 раз");}
//         else {
//             console.log("встречается несколько раз");}

// let str = "hello"
// console.log(str.toUpperCase());

// let str = "hello.world"
// console.log(str.split(""));

// let str = "hello.world"
// console.log(str.slice(0,3));

// 1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. Выведите в консоль длину первого слова.

// let str = "LIGHTCODE PROGRAMMING"
// console.log(str.slice(0,9).length);

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.

// let str = "Максимально УЖАСНО"
// console.log(str.slice(12,18).toLowerCase());

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.

// let str = "Максимально УЖАСНО"
// console.log(str.slice(0,11).toUpperCase());

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.

// let str = "Максимально УЖАСНО"
// console.log(str.slice(5,19));

// 5. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки

// let str = "Максимально"
// let str2 = "УЖАСНО"
// console.log(str + " " + str2);

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.

// let str = "Максимально Ужасно"
// console.log(str.indexOf("Ужасно"));

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза",
//   если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"

//   let str = "Максимально УЖАСНО"
//   let letter = "а"
//  if (str.indexOf(letter) !== str.lastIndexOf(letter)){
//         console.log("встречается > 1 раз");}
//         else {
//             console.log("встречается < 1 раз");}

// 8. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.

//     let str = "Максимально УЖАСНО"
//     console.log(str.indexOf("а"));
 
// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.

// let str = "Максимально Ужасно"
// console.log(str.indexOf("о"), str.lastIndexOf("о"));

// 10. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.

// let str = "aaa bbb ccc"
// console.log(str.slice(4,7));

// let str = "aaa bbb ccc"
// console.log(str.substring(4,7));

// let str = "aaa bbb ccc"
// console.log(str.substr(4,3));

const stringToNumber = (str) => {
    return +str
}
console.log(stringToNumber("234"));