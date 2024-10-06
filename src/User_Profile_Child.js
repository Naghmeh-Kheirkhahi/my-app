
import React from "react";

import './User_Profile.css';

function UserProfileChild(props) {

    return (
        <>
            <div className="col-4 mb-3 mt-3">
                <div className="main_class">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div>
                        <h1>{props.fname} {props.lname}</h1>
                        <p><b>Age: </b>{props.age}</p>
                        <p><b>Birth Date: </b>{props.birthDate}</p>
                        <p><b>Status: </b>{props.status}</p>
                        <p><b>Job: </b>{props.job}</p>
                        <p><b>Education: </b>{props.education}</p>
                        <p><b>Phone Number: </b>{props.phoneNumber}</p>
                        <p><b>Email Address: </b>{props.emailAddress}</p>
                        <p><b>Address: </b>{props.address}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UserProfileChild;