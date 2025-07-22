import React from "react";
import Message from "../Message/Message";
import style from './MessagesList.module.css';

const MessagesList = ({ messages, deleteMessageById }) => {
	if (messages.length === 0) {
		return (
			<div className={style.empty}>
				<span>No hay mensajes, envía uno o selecciona otro chat</span>
			</div>
		);
	}

	const lista_mensajes = messages.map((message) => (
		<Message 
			key={message.id}
			emisor={message.emisor} 
			hora={message.hora} 
			id={message.id} 
			texto={message.texto} 
			status={message.status}
			deleteMessageById={deleteMessageById}
		/>
	));

	return <div className={style.messages_container}>{lista_mensajes}</div>;
};

export default MessagesList;
