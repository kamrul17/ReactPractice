// #################################
// EXAMPLE OF CONTEXT API
// #################################

// import React from "react";
// import { data, data1 } from "./App";

// function ChildC() {
//   return (
//     <div>
//       <h1>this is ChildC</h1>
//       <data.Consumer>
//         {(name) => {
//           return (
//             <data1.Consumer>
//               {(gen) => {
//                 return (
//                   <h1>
//                     my name is {name} and age is {gen}
//                   </h1>
//                 );
//               }}
//             </data1.Consumer>
//           );
//         }}
//       </data.Consumer>
//     </div>
//   );
// }

// export default ChildC;

// #################
// EXAMPLE OF USE_CONTEXT HOOK
// #################

import React, { useContext } from "react";
import { data, data1, data2, data3, data4, data5 } from "./App";

function ChildC() {
  const myname = useContext(data);
  const gender = useContext(data1);
  const age = useContext(data2);
  const func = useContext(data3);
  const obj = useContext(data4);
  const [fname, setName] = useContext(data5);

  return (
    <div>
      <h1>
        my name is {myname} and gender is {gender} and my age is {age}
      </h1>
      <p>
        Name: {obj.name}, Age: {obj.age}
      </p>
      <button onClick={func}>click here</button>

      <h1>#######################################</h1>
      <h1>{fname}</h1>
      <button onClick={() => setName("lezen")}>change name</button>
    </div>
  );
}

export default ChildC;
