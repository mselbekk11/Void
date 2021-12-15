import React from "react";
import './App.css';
// import { Link } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

// import Home from './components/home/home';
import Void from './components/void/void';
// import CourseOne from './components/course-one/course-one';

// import NavBar from './components/navbar/navbar';
// import Home from './home';
// import CourseTwo from './course-two';
// import Contact from './contact';


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Home /> */}
      {/* <CourseOne /> */}
      <Void/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


// function App() {
//   return (
//       <div className="App">
//         <NavBar />
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </div>
//   );
// }

// export default App;



// export default function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem"
//         }}
//       >
//         <Link to="/Home">Home</Link> |{" "}
//         <Link to="/Constellation">CourseOne</Link>
//       </nav>
//     </div>
//   );
// }

