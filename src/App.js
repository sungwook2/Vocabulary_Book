
// import './App.css';
// import Hello from './component/Hello';
// import Welcome from './component/Welcom';
// import styles from "./App.module.css";

import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Emptypage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

// function App() {
//   // const name = "Tom";
//   // const naver = {
//   //   name:"Naver",
//   //   url: "https://naver.com",
//   // }
//   return (
//     <div className="App">
//       {/* <h1 style={{
//         color:"Blue",
//         backgroundColor: "green",
//         }}>
//           Hello, {name}<p>{2 + 3}"</p>
//         </h1>
//         <a href = {naver.url}>{naver.name}</a> */}
//         <Hello age = {10} />
//         <Hello age = {20} />
//         <Hello age = {30} />
//         {/* <div className = {styles.box}>App</div> */}
//     </div>
//   );
// }

// export default App;

function App() {
  return (
  <BrowserRouter>
    <div className = "App">
    <Header />
    <Switch>
      <Route exact path = "/">
        <DayList />
      </Route>
      <Route path = "/day/:day">
        <Day />
      </Route>
      <Route path = "/create_word">
        <CreateWord/>
      </Route>
      <Route path = "/create_day">
        <CreateDay/>
      </Route>
      <Route>
        <Emptypage />
      </Route>
    </Switch>

   </div>
  </BrowserRouter>
  
  );
}

export default App;
