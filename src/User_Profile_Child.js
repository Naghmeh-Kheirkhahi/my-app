
import React from "react";

import './User_Profile.css';

function UserProfileChild(props) {

    return (
        <>

            <div className="col-4 main_class mb-3">
                <div className="card">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h1 className="card-title">{props.fname} {props.lname}</h1>
                        <p className="card-text">Age: {props.age}</p>
                        <p className="card-text">Birth Date: {props.birthDate}</p>
                        <p className="card-text">Status: {props.status}</p>
                        <p className="card-text">Job: {props.job}</p>
                        <p className="card-text">Education: {props.education}</p>
                        <p className="card-text">Phone Number: {props.phoneNumber}</p>
                        <p className="card-text">Email Address: {props.emailAddress}</p>
                        <p className="card-text">Address: {props.address}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UserProfileChild;