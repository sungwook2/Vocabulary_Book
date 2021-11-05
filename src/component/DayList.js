import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const day = useFetch('http://localhost:3001/days');
    // const [days, setDays] = useState([]);
    // // const [count, setCount] = useState(0);

    // // function onClick() {
    // //     setCount(count + 1);
    // // }

    // // function onClick2() {
    // //     setDays([
    // //         ...days,
    // //         {
    // //             id : Math.random(),
    // //             day : 1,
    // //         }
    // //     ]);
    // // }

    // useEffect( () => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data)
    //     })
    // }, [] );

    if (day.length === 0) {
        return <span>Loading...</span>
    }

    return(
      <><ul className="list_day">
            {day.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
        {/* <button onClick = {onClick}>{count}</button>
        <button onClick = {onClick2}>Day change</button> */}
      </>
    );
}