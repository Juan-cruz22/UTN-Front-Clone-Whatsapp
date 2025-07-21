import React from "react";
import { Link } from "react-router-dom";

const ContactItem = ({contact}) => {
    return(
        <Link to={`/contact/${contact.id}/messages`}>
            <h2>{contact.name}</h2>
            <img src={contact.avatar} alt={contact.name}/>
            <span>last connection: {contact.lastConnection}</span>
            <span>Connection Status: {contact.connectionStatus}</span>
        </Link>
    );
};

export default ContactItem;