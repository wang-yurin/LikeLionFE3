// 평균
// const arr = [10, 20, 30, 10, 20, 30, 40, 10];
// const sum = arr.reduce((a, b) => a + b) / arr.length;
// console.log(sum);

// 분산
// const arr = [10, 20, 30, 10, 20, 30, 40, 10];
// let dev = [];
// for (let i of arr) {
//   dev.push(parseInt(i ** 0.5));
// }
// const result = dev.reduce((a, b) => a + b) / dev.length;
// console.log(result);

// string 평균
// const str = "5, 4, 10, 2, 5";
// const strArr = str.split(",");
// const result = strArr.map((v) => +v).reduce((a, b) => a + b) / strArr.length;
// console.log(Math.floor(result));

// 각 자리수의 합
// const array = [11, 22, 33, 111, 2];
// const result = array
//   .join("")
//   .split("")
//   .map((v) => +v)
//   .reduce((a, b) => a + b);
// console.log(result);

// 반복문 숫자 콤마
// 못함;

// 반복문 콤마 제거
// function removeComma(n) {
//   return console.log(n.split(",").join(""));
// }
// removeComma("100,000,000");

// 문자열 뒤집기
// const str = "JavaScript";
// const strArr = str.split("");
// let temp = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   temp += strArr[i];
// }
// console.log(temp);
// console.log(str.split("").reverse().join(""));

// 로또
// let lotto = [];
// while (lotto.length < 6) {
//   let num = parseInt(Math.random() * 45);
//   if (lotto.indexOf(num) === -1) {
//     lotto.push(num);
//   }
// }
// console.log(lotto);
