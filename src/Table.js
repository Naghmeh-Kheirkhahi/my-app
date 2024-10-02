import React from "react";


function Table({ className }) {

    return (
        <>
            <table className={className}>
                <tr>
                    <th>FName</th>
                    <th>LName</th>
                    <th>Age</th>
                    <th>Job</th>
                </tr>

                <tr>
                    <td>Naghmeh</td>
                    <td>Kheirkhahi</td>
                    <td>31</td>
                    <td>Student</td>
                </tr>

                <tr>
                    <td>Elnaz</td>
                    <td>Fakkar</td>
                    <td>35</td>
                    <td>Teacher</td>
                </tr>

                <tr>
                    <td>Hadis</td>
                    <td>Hamedizadeh</td>
                    <td>28</td>
                    <td>Manager</td>
                </tr>
            </table>
        </>
    )
}


export default Table;
