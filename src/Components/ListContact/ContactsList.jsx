import ContactItem from '../ContactItem/ContactItem'

const ContactsList = ({ contacts }) => {
    const hasContacts = contacts && contacts.length > 0;

    return (
        <div className={`ContactsList ${hasContacts ? "" : ''}`}>

            {contacts && contacts.length > 0 
            ? contacts.map(contact =>(
            <div key={contact.id} className="">
                <ContactItem 
                    {...contact}
                />
            </div>
            ))
            : (
                <p> There are no contacts</p>
            )
            }
        
        </div>
        
     )

}
 



export default ContactsList;