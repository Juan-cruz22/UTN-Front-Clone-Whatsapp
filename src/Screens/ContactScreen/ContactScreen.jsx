import React from "react";
import { useState } from "react";
import ContactList from '../../Components/ContactList/ContactList'
import {getContactList} from '../../Services/contactServices'

const ContactScreen = () =>{
    const contacts = getContactList()
    const [contactsState, setContactsStates]= useState(contacts);

    return(
        <div>
            <ContactList contacts={contactsState}/>
        </div>
    )
};

export default ContactScreen;

