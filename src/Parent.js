
import Child from "./Child";

import React from "react";

import redCar from './Assets/images/red_car.jpg';

import blueCar from './Assets/images/blue_car.jpg';


function Parent(){
    return(
        <div>
            <Child
            
            fname= "Naghmeh"
            lname= "Kheirkhahi"
            age= "31"
            education= "Masters in Computer Science"

            carName= "Toyota"
            carNumber= "1234"
            carModel= "2021"
            carImage= {redCar}

            />


            <Child
            
            fname= "John"
            lname= "Doe"
            age= "25"
            education= "Bachelors in Computer Science"


            carName= "Bugati"
            carNumber= "5648"
            carModel= "2023"
            carImage= {blueCar}
            
            />
        </div>
    )
}


export default Parent;