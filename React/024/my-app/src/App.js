// import { useState } from "react";

// function Resume({ 이름, 취미, 자기소개 }) {
//   const [like, setLike] = useState(0);

//   function handleClickLike() {
//     setLike(like + 1);
//     console.log(like);
//   }

//   return (
//     <section>
//       <h2>{이름}</h2>
//       <p>{취미}</p>
//       <p>{자기소개}</p>
//       <p>{like}</p>
//       <button onClick={handleClickLike}>like</button>
//     </section>
//   );
// }

// function App() {
//   return (
//     <main>
//       <Resume 이름="왕유린" 취미="코딩" 자기소개="저는 최고입니다"></Resume>
//     </main>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function Resume(props) {
//   const [like, setLike] = useState(0);
//   let heart = like % 2 === 1 ? "❤️" : "";

//   function handleClickLike() {
//     // setLike(like + 1)
//     // console.log(like);
//     setLike(like + 1);
//   }

//   return (
//     <div>
//       <button onClick={handleClickLike}>like : {like}</button>
//       <span>{heart ? heart : ""}</span>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Resume />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function Resume(props) {
  const [like, setLike] = useState(0);
  let heart = String(like).search(/[369]/g) !== -1 ? "👏" : "";

  function handleClickLike() {
    setLike(like + 1);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <span>{heart ? heart : ""}</span>
    </div>
  );
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;
