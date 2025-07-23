import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "../../Services/contactServices";
import style from './ContactDescription.module.css';

function ContactDescription() {
    const { contact_id } = useParams();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const contactData = getContactById(contact_id);
        setContact(contactData);
    }, [contact_id]);

    if (!contact) return <div>Cargando descripción...</div>;

    return (
        <div className={style.contact_description_container}>
            <img src={contact.avatar} alt={contact.name} className={style.avatar} />
            <h1>{contact.name}</h1>
            <p className={style.description}>{contact.description}</p>
            <p className={style.status}>
                {contact.connectionStatus === 'offline'
                    ? `Última conexión: ${contact.lastConnection}`
                    : 'En línea'}
            </p>
        </div>
    );
}

export default ContactDescription;