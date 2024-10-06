
import React from "react";

function Child(props) {
    const styles = {


        user: {
            color: 'red',
            backgroundColor: 'black',
            border: '1px solid green',
            textAlign: 'center',
            marginBottom: '2rem'
        },


        car: {
            color: 'green',
            backgroundColor: 'orange',
            border: '2px solid black',
            textAlign: 'center',
            marginBottom: '2rem'
        },


        img: {
            width: '500px',
            height: '300px',
            borderRedius: '15px'
        }

    }
    return (

        <>
            <div style={styles.user}>
                <h1 style={{fontSize: '2rem'}}>{props.fname}</h1>
                <p>{props.lname}</p>
                <p>{props.age}</p>
                <p>{props.education}</p>
            </div>

            <div style={styles.car}>
                <h1 style={{fontSize: '2.5rem'}}>{props.carName}</h1>
                <p>{props.carNumber}</p>
                <p>{props.carModel}</p>
                <img style={styles.img} src={props.carImage} />
            </div>

        </>
    )
}


export default Child;