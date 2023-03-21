import React from "react";
import './ContactItem.css'


const ContactItem = ({name, pictureUrl, popularity, id, wonOscar, wonEmmy }) => {
    const ContactwonOscar = '🏆'.repeat(wonOscar);
    const ContactwonEmmy = '🏆'.repeat(wonEmmy)
return (
    <div className="table" key={id}>
        <button>Add Random Contact</button>
        <thead>
            <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">wonOscar</th>
            <th scope="col">wonEmmy</th>

            </tr>
        </thead>

        <tbody>
            <tr>
                <th scope ="row">
                    <td>
                        <img className="card-img" src= {pictureUrl}  alt=""/>
                    </td>
                </th>
                <th scope ="row">
                    <td>
                        <h2>{name}</h2>
                    </td>
                </th>
                <th scope ="row">
                    <td>
                        <h2>{popularity}</h2>
                    </td>
                </th>
                <th scope ="row">
                    <td>
                        <h2>{ContactwonOscar}</h2>
                    </td>
                </th>
                <th scope ="row">
                    <td>
                        <h2>{ContactwonEmmy}</h2>
                    </td>
                </th>



            </tr>
        </tbody>
                 

    </div>
)
}

export default ContactItem;