// #################################
// EXAMPLE OF CONTEXT API->>>>>>>>>>>>>(create,provider,consumer)
// WHY->avoid props drilling
// #################################
// import { createContext } from "react";
// import ChildA from "./ChildA";
// const data = createContext();
// const data1 = createContext();
// function App() {
//   const name = "lezend";
//   const gender = "male";

import { useState } from "react";

//   return (
//     <>
//       <h1>this is App class</h1>
//       <data.Provider value={name}>
//         <data1.Provider value={gender}>
//           <ChildA />
//         </data1.Provider>
//       </data.Provider>
//     </>
//   );
// }

// export default App;
// export { data, data1 };

// #################
// EXAMPLE OF USE_CONTEXT HOOK(create,provider,useContext)
// #################

// import { createContext, useContext, useState } from "react";
// import ChildA from "./ChildA";

// const data = createContext();
// const data1 = createContext();
// const data2 = createContext();
// const data3 = createContext();
// const data4 = createContext();
// const data5 = createContext();
// function App() {
//   const name = "lezend";
//   const gender = "male";
//   const age = 23;

//   const handleClick = () => {
//     alert("Button clicked!");
//   };
//   const studDetails = { name: "John", age: 30 };
//   const [fname, setName] = useState("initial state");
//   return (
//     <>
//       <h1>this is App class</h1>
//       <data.Provider value={name}>
//         <data1.Provider value={gender}>
//           <data2.Provider value={age}>
//             <data3.Provider value={handleClick}>
//               <data4.Provider value={studDetails}>
//                 <data5.Provider value={[fname, setName]}>
//                   <ChildA />
//                 </data5.Provider>
//               </data4.Provider>
//             </data3.Provider>
//           </data2.Provider>
//         </data1.Provider>
//       </data.Provider>
//     </>
//   );
// }

// export default App;
// export { data, data1, data2, data3, data4, data5 };

// #################
// EXAMPLE OF USE_MEMO hook
// useMemo is a hook in React that helps optimize performance by memoizing the result of a computation. In simple terms, it allows you to remember the result of an expensive function call and avoid recalculating it on every render unless its dependencies change.

// Why Use useMemo?
// Performance Optimization: If you have a function that performs a heavy computation, you can use useMemo to save the result of that computation. This way, the function is only re-executed when its dependencies change, not on every render.

// Avoid Unnecessary Calculations: It ensures that functions are not re-executed unnecessarily, reducing the load on the browser and making your application faster.
// #################

// import { useMemo, useState } from "react";

// function App() {
//   const [add, setAdd] = useState(0);
//   const [subtract, setSubtract] = useState(100);

//   const useMemoFunc = useMemo(() => {
//     console.log("###########");

//     return add * 10;
//   }, [add]);

//   return (
//     <>
//       <h1>this is App class</h1>

//       <h1> {useMemoFunc}</h1>
//       <h1>Increment:{add}</h1>
//       <h1>Decrement:{subtract}</h1>
//       <button onClick={() => setAdd(add + 1)}>Add</button>
//       <button onClick={() => setSubtract(subtract - 1)}>subtract</button>
//     </>
//   );
// }

// export default App;

// #################
// EXAMPLE OF USE_STATE HOOK WITH OBJECT
// #################

function App() {
  const [value, setValue] = useState({ name: "lex", age: 34 });
  return (
    <>
      <h1>
        my name is {value.name} & my age is {value.age}
      </h1>
      <button onClick={() => setValue({ ...value, name: "changename" })}>
        update name
      </button>
    </>
  );
}

export default App;
