import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import style from './ContactList.module.css'

const ContactList = ({contacts}) => {
    return(
        <div className={style.contact_list}>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default ContactList;