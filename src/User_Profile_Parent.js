
import React from "react";

import UserProfileChild from "./User_Profile_Child";

import person1 from './Assets/images/person1.jpg';
import person2 from './Assets/images/person2.jpg';
import person3 from './Assets/images/person3.jpg';
import person4 from './Assets/images/person4.jpg';
import person5 from './Assets/images/person5.jpg';
import person6 from './Assets/images/person6.jpg';




function UserProfileParent() {
    return (

        <div className="container">
            <div className="row" >

                <UserProfileChild

                    image={person1}
                    fname="Sarah"
                    lname="Johnson"
                    age="35"
                    birthDate="18.10.1989"
                    status="Married"
                    job="Nurse"
                    education="Masters in Nursing"
                    phoneNumber="123-456-7890"
                    emailAddress="Sarah_Johnson89@gamil.com"
                    address="1543 Dlj St. New York, YU 21587"

                />



                <UserProfileChild

                    image={person2}
                    fname="Elizabeth"
                    lname="Anderson"
                    age="25"
                    birthDate="22.11.1999"
                    status="Single"
                    job="Computer Engineer"
                    education="Masters in Computer Science"
                    phoneNumber="258-745-6633"
                    emailAddress="Elizabeth_Anderson99@gamil.com"
                    address="6048 Fzc St. Torento, IL 62618"

                />



                <UserProfileChild

                    image={person3}
                    fname="Emily"
                    lname="Williams"
                    age="28"
                    birthDate="05.02.1996"
                    status="Single"
                    job="English Teacher"
                    education="Bachelor in English Teaching"
                    phoneNumber="145-585-963"
                    emailAddress="Emily_Williams96@gamil.com"
                    address="8855 Qih St. Paris, OP 49612"

                />



                <UserProfileChild

                    image={person4}
                    fname="Jessica"
                    lname="Thompson"
                    age="37"
                    birthDate="15.04.1987"
                    status="Married"
                    job="Accountant"
                    education="Bachelor in Accounting"
                    phoneNumber="127-847-537"
                    emailAddress="Jessica_Thompson87@gamil.com"
                    address="1705 Rnw St. Berlin, SA 99773"

                />



                <UserProfileChild

                    image={person5}
                    fname="Olivia"
                    lname="Mitchell"
                    age="43"
                    birthDate="20.08.1981"
                    status="Married"
                    job="Gynecologist"
                    education="Medicine in Gynegology"
                    phoneNumber="914-258-302"
                    emailAddress="Olivia_Mitchell81@gamil.com"
                    address="6593 Tem St. London, KN 18054"

                />



                <UserProfileChild

                    image={person6}
                    fname="Maria"
                    lname="Lopez"
                    age="56"
                    birthDate="09.06.1968"
                    status="Married"
                    job="Chemist"
                    education="Chemistry"
                    phoneNumber="804-069-372"
                    emailAddress="Maria_Lopez68@gamil.com"
                    address="2800 Isv St. Madrid, BX 5513"

                />

            </div>
        </div>

    )

}


export default UserProfileParent;