import React, { useEffect, useState } from "react";
import MessagesList from '../../Components/MessagesList/MessagesList';
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm';
import { Link, useParams } from "react-router";
import { getContactById } from "../../Services/contactServices";
import { FaArrowLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoEllipsisVertical } from "react-icons/io5";
import style from './ChatScreen.module.css';


const ChatScreen = () => {
    const { contact_id } = useParams();
    const [contactSelected, setContactSelected] = useState(null);
    const [messages, setMessages] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        const contact = getContactById(contact_id);
        setContactSelected(contact);
        setMessages(contact.messages);
    }, [contact_id]);

    const deleteMessageById = (message_id) => {
        setMessages(messages.filter(message => message.id !== message_id));
    };

    const addNewMessage = (text) => {
        const new_message = {
            emisor: 'YO',
            hora: '11:10',
            texto: text,
            status: 'no-visto',
            id: messages.length + 1
        };
        setMessages([...messages, new_message]);
    };

    const deleteAllMessages = () => {
        setMessages([]);
        setShowConfirm(false);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
    };

    if (!contactSelected) return null;

    return (
        <div className={style.Wallpaper}>
            <div className={style.HeaderChat}>
                <FaArrowLeft className={style.Arrow} onClick={() => window.history.back()} />
                    <Link to={`/contact/${contact_id}/description`}>
                    <div className={style.Header_photoname}>
                        <img src={contactSelected.avatar} />
                        <div>
                            <h2>{contactSelected.name}</h2>
                            <span>
                                {contactSelected.connectionStatus === 'offline'
                                    ? 'Last Connection: ' + contactSelected.lastConnection
                                    : 'Online'}
                            </span>
                        </div>
                    </div>
                    </Link>
                <div className={style.Header_icons}>
                    <CiSearch/>
                    <IoEllipsisVertical className={style.Ellipsis} onClick={() => setShowConfirm(true)}/>
                </div>
            </div>

            <MessagesList messages={messages} deleteMessageById={deleteMessageById} />
            <NewMessageForm addNewMessage={addNewMessage} />
            {showConfirm && (
                <div className={style.modal_overlay}>
                    <div className={style.modal_box}>
                        <p>¿Deseas eliminar todos los mensajes?</p>
                        <div className={style.modal_buttons}>
                            <button onClick={cancelDelete}>Cancelar</button>
                            <button onClick={deleteAllMessages}>Eliminar</button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatScreen;
