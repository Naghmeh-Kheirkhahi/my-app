import React from "react";


function List({className , text1, text2, text3, text4, text5}) {
    return(
        <div className = {className} >
            <ul>
                <li>{text1}</li>
                <li>{text2}</li>
                <li>{text3}</li>
                <li>{text4}</li>
                <li>{text5}</li>
            </ul>
        </div>
    )
}

export default List;