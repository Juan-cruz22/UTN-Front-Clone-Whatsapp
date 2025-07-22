import React from "react";
import { Link } from "react-router-dom";
import style from './ContactItem.module.css'

const ContactItem = ({contact}) => {
    const lastMessage = contact.messages[contact.messages.length - 1].texto;
    const lastMessageTime = contact.messages[contact.messages.length - 1].hora;

    return(
        <Link to={`/contact/${contact.id}/messages`}>
            <div className={style.contact_item}>
                <div className={style.contact_info_name}>
                    <img src={contact.avatar} alt={contact.name}/>
                </div>
                <div className={style.contact_info}>
                    <div className={style.contact_info_message}>
                        <h2>{contact.name}</h2>
                        <p>
                            {lastMessage.length > 30 ? `${lastMessage.slice(0, 34)}...`: lastMessage}
                        </p>
                    </div>
                    <div className={style.contact_info_time}>
                        <span>{lastMessageTime}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ContactItem;