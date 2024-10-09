
import React from "react";

import './User_Profile.css';

function UserProfileChild(props) {

    return (
        <>
            <div className="col-4 mb-3 mt-3">
                <div className="main_class">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div>
                        <h1>{props.name}</h1>
                        <p><b>Username: </b>{props.username}</p>
                        <p><b>Phone Number: </b>{props.phoneNumber}</p>
                        <p><b>Email Address: </b>{props.emailAddress}</p>
                        <p><b>Website: </b>{props.website}</p>
                        <p><b>Address: </b>{props.addressStr} {props.addressSuite} {props.addressCity} {props.addressZipCode}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UserProfileChild;