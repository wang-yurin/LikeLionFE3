let me = { age: 30 };
let you = me; // {} 참조 카운트 : 2

me = null; // 참조 카운트 : 1
you = null; // 참조 카운트 : 0

// x가 참조하는 객체를 object1, y가 참조하고있는 객체를 object2라고 하자
let x = {
  y: {
    z: 1,
  },
};

let a = x; // object1 의 참조 카운트 : 2 (object1을 참조하고 있는 것 x, a)
x = 1; // object1 의 참조 카운트 : 1 (object1을 참조하고 있는 것 a)

let b = a.y; // object2 의 참조 카운트 : 2 (object2을 참조하고 있는 것 a.y b)
a = 2; // object1 의 참조 카운트 : 0 (object1을 참조하고 있는 것 없음)
// object1을 참조하고 있는 것이 없어서 가비지 컬렉터 대상이 되지만 object1 안의 object2는 남아있어 Object1이 불필요하게 남아있다. 이런걸 메모리 누수가 발생했다고 표현한다.

// 클로저
function outer() {
  let privateVal = ["test"];

  function getPrivate() {
    return privateVal;
  }

  return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

const aespa = ["카리나", "윈터", "지젤", "닝닝"];
const newAespa = aespa.map((item) => item + "💖");
console.log(newAespa);
