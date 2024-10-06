
import React from "react";


function UserProfileChild(props) {

    return(
        <>
        
        <div>
            <img src={props.image}/>
            <h1>{props.fname} {props.lname}</h1>
            <p>{props.age}</p>
            <p>{props.birthDate}</p>
            <p>{props.status}</p>
            <p>{props.job}</p>
            <p>{props.education}</p>
            <p>{props.phoneNumber}</p>
            <p>{props.emailAddress}</p>
            <p>{props.address}</p>
        </div>
        
        </>
    )
}


export default UserProfileChild;