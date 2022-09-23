// import React from "react";

// import ReactDOM  from "react-dom";

// ReactDOM.render(
//   <>
//     <h1>React</h1>
//     <p>Paragraph in React</p>
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//       <li>4</li>
//       <li>5</li>

//     </ul>
//     </>
//   ,
//   document.getElementById("root")
// );

//-------------------------------------//

// import React from "react";
// import ReactDOM  from "react-dom";
// const a = 12;
// const b = 13;
// const c = a + b;

// ReactDOM.render(
//   <>
//   <p>{`Addition of ${a} and ${b} is ${c}`}</p>
//   </>
//   ,
//   document.getElementById("root")
// );


//------------------------------------------//

// import React from "react";
// import ReactDOM  from "react-dom";
// var date = new Date().toLocaleDateString();
// var time = new Date().toLocaleTimeString();
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();
// var today = date.getDate();
// var month = date.getMonth();
// var year = date.getFullYear();

// if(s < 10){
//   s = "0" + s;
// }
// if(m < 10){
//   m = "0" + m;
// }
// if(h < 10){
//   h = "0" + h;
// }

// ReactDOM.render(
//   <>
//   <h1>{ ` Current Date :- ${today}-${month}-${year}`}</h1>
//   <h1>{ ` Current Time :- ${h} : ${m} : ${s}`}</h1>
//   </>,
//   document.getElementById("root")
// )

// ReactDOM.render(
//   <>
//   <h1>{ ` Current Date :- ${date}`}</h1>
//   <h1>{ ` Current Date :- ${time}`}</h1>
//   {/* <h1>{ ` Current Time :- ${h} : ${m} : ${s}`}</h1> */}
//   </>,
//   document.getElementById("root")
// )


//------------------------------------------//



// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// const name = "React";
// const image1 = "https://picsum.photos/200/300";
// const image2 = "https://picsum.photos/250/300";
// const image3 = "https://picsum.photos/300/300";

// ReactDOM.render(
//   <>
//     <h1 style={{"color" : "red", "textAlign" : "center", "fontWeight" : "bold"}} contentEditable="true">{name}</h1>,
//     <div className="img_div">
//     <img src={image1} alt="random-images" />
//     <img src={image2} alt="random-images" />
//     <a href="www.unleash-cx.com" target="_blank">
//       <img src={image3} alt="random-images" />
//     </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

//---------------------------------------------------//


// import React from "react";
// import ReactDOM from "react-dom";

// let date = new Date();
// date = date.getHours();
// let greeting = "";
// const cssstyle = {};

// if(date >= 1 && date < 12){
//    greeting = "good morning";
//    cssstyle.color = "green";
// }
// else if(date >= 12 && date < 16){
//   greeting = "good afternoon";
//   cssstyle.color = "yellow";
// }
// else if(date >= 16 && date < 19){ 
//   greeting = "good evening";
//   cssstyle.color = "blue";
// }
// else{
//   greeting = "good night";
//   cssstyle.color = "red";
// }


// ReactDOM.render(
//   <>
//   <h1>
//     Hello, <span style={cssstyle}>{greeting}</span>
//   </h1>
//   </>,
//   document.getElementById("root") 
// );

//-----------------------------------------//
// import React from "react";

// import ReactDOM from "react-dom";

// import "./index.css";

// ReactDOM.render(
//   <>
//   <h1>Hello ReactJS</h1>
//   <p>This is test message </p>
//   <ol>
//     <li>NodeJs</li>
//     <li>ReactJs</li>
//     <li>MongoDB</li>
//     <li>ExpressJS</li>
//   </ol>
//   </>,
//   document.getElementById("root")
// )


//----------------------------------------------------------//


// import React from "react";
// import ReactDOM  from "react-dom";
// import Heading from './Heading';
// import Para from "./Para";
// import Ol from "./Ol";
// // let name = "Akash";
// ReactDOM.render(
//   <>
//   {/* <h1>My Name is {name}</h1> */}
//   <Heading/>
//   <Para/>
//   <Ol/>
//   </>,
//   document.getElementById("root")
// );


//-----------------------------------------------------------------//


import React from "react";

import  ReactDOM  from "react-dom";

import App from "./App";


ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById("root")
)