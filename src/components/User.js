import { useState, useEffect } from "react";

//Functional component is a function which returns some JSX

const User = (props) => {
    const [count1, setCount1] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>Count1: {count1}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h3>contact: {props.contact}</h3>            
        </div>
    )
}



export default User;