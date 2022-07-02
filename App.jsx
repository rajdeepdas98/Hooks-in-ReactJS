// import React from "react";
// import List from "./List";
// import Heading from "./Heading";
// import Para from "./Para";

// function App(){
//     return(
//         <>
//         <Heading/>
//         <List/>
//         <Para/>
//         </>
//     );
// }

// export default App;



// import React, { useState } from "react"


// const App=()=>{
//     const state=useState();
//     let [count,setCount]=useState(0);
    
//     const IncNum=()=>{
//         setCount(count+1)
//         console.log("clicked "+count++)
//     }

//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={IncNum}>CLICK ME</button>
//         </>
//     )
// }
// export default App;



import React, { useState } from "react";



const App= ()=>{
    let newTime=new Date().toLocaleTimeString()
    const [cTime,setcTime]=useState(newTime);
    const UpdateTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setcTime(newTime);
    };

    return(
    <>
        <h1>{cTime}</h1>
        <button onClick={UpdateTime}>GET TIME</button>
    </>
); 

}
export default App;