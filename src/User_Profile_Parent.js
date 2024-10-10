
import React, { useEffect, useState } from "react";
import axios from "axios";

import UserProfileChild from "./User_Profile_Child";

import person1 from './Assets/images/person1.jpg';
// import person2 from './Assets/images/person2.jpg';
// import person3 from './Assets/images/person3.jpg';
// import person4 from './Assets/images/person4.jpg';
// import person5 from './Assets/images/person5.jpg';
// import person6 from './Assets/images/person6.jpg';




function UserProfileParent() {


    const [data, setData] = useState([]); //because data is an array, we put an empty array as the useState's input.
    const [loading, setLoading] = useState(false); // default is false meaning the page isn't loading.


    useEffect(() => { //we use it to get an API and show its data by axios as a hooker when the web page is loaded.

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                setData(res.data); // all data of the API that is in the data array, is put in the input of setData and then is put in the data of useState.
            })
    }, []) // we use [] at the end of the useEffect so that the web page is loaded and the API data is shown one time.




    return (

        <div className="container">
            <div className="row" >

                {data.map(item => ( // in React we use map instead of foreach to mention each of the items of the array in the API
                    <UserProfileChild

                        image={person1}
                        name={item.name}
                        username={item.username}
                        phoneNumber={item.phone}
                        emailAddress={item.email}
                        website={item.website}
                        addressStr={item.address.street}
                        addressSuite={item.address.suite}
                        addressCity={item.address.city}
                        addressZipCode={item.address.zipcode}

                        //we make a child file and use props. Then, we make one child as a Tag from the child file in the parent file and call the properties of each object in the API array ONLY ONCE.
                    />
                ))}
            </div>
        </div>
    )
}


export default UserProfileParent;