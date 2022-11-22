import { useState, useMemo } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const result = useMemo(() => {
    return 부하();
  }, [countTwo]);

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("rendering");

  return (
    <div>
      <h1>계산결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>BUTTON ONE</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>BUTTON TWO</button>
    </div>
  );
}
export default App;
