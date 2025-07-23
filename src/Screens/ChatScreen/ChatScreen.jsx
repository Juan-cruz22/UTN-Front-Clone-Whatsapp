import React, { useEffect, useState } from "react";
import MessagesList from '../../Components/MessagesList/MessagesList';
import { NewMessageForm } from '../../Components/NewMessageForm/NewMessageForm';
import { Link, useParams } from "react-router";
import { getContactById } from "../../Services/contactServices";
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

    if (!contactSelected) return <div>Cargando chat...</div>;

    return (
        <div className={style.Wallpaper}>
            <div className={style.HeaderChat}>
                <div className={style.Header_photoname}>
                    <button>
                        <i className="bi bi-caret-left" onClick={() => window.history.back()}></i>
                    </button>
                    <Link to={`/contact/${contact_id}/description`}>
                        <img src={contactSelected.avatar} />
                    </Link>
                    <div>
                        <h2>{contactSelected.name}</h2>
                        <span>
                            {contactSelected.connectionStatus === 'offline'
                                ? 'Last Connection: ' + contactSelected.lastConnection
                                : 'Online'}
                        </span>
                    </div>
                </div>
                <div className={style.Header_icons}>
                    <i className="bi bi-search"></i>
                    <i
                        className="bi bi-three-dots-vertical"
                        onClick={() => setShowConfirm(true)}
                        style={{ cursor: 'pointer' }}
                    ></i>
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
