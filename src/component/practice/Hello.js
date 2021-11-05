import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

export default function Hello(props) {

    // function showName() {
    //    alert("Mike");
    // }

    // function showAge(age) {
    //     alert(age);
    // }

    // function showText(txt) {
    //     alert(txt);
    // }

    // let name = "Mike";
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);
    const msg = age > 10 ? "adult" : "not adult";

    function changeName() {
        // const newName = name === "Mike" ? "Jane" : "Mike";
        // setName(newName);
        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(age + 1);
    }

    return (
        <div>
        {/* <h1 style = {
        {
            color: '#f00',
            borderRight: '2px solid #000',
            marginBottom: '50px',
            opacity: 0.5,
        }

        }>Hello</h1>
        <World />
        <World />
        <div className = {styles.box}>Hello</div> */}
        {/* <h1>Hello</h1>
        <button onClick= {showName}>Show name</button>
        <button onClick = {
            ()=>{
                showAge(12);
            }
        }>Show age</button>

        <input type = "text" onChange = {(e) => 
            {const txt = e.target.value;
             showText(txt);
            }
        } /> */}

        <h1>state</h1>
        <h2>{name}({age}) : {msg}</h2>
        <UserName name = {name} />

        <button onClick = {changeName}>Change</button>

        </div>
    );
}