import { Component } from "react";
import ContactsList from "../Components/ListContact/ContactsList";
import contactsJSON from '../contacts.json'

export default class Home extends Component {
    state = {
        contacts: contactsJSON.splice(0, 5)
    }
    
    render () {
        const { contacts} = this.state;
        return(
            <div className="Home">
                <h1>Iron Contacts</h1>
                <ContactsList  contacts={contacts}/>

            </div>
        )
    }
}