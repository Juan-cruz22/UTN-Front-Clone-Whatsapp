import React from 'react'
import style from './Message.module.css'
import { RxCross1 } from "react-icons/rx";


const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	const isMine = emisor === 'YO'

	return (
		<div className={style.message_container_wallpaper}>
			<div className={`${style.message_container} ${isMine ? style.mine : style.other}`}>
				<div className={style.message_bubble}>
					<p>{texto}</p>
					<span className={style.message_time}>{hora}</span>
					<button onClick={() => deleteMessageById(id)}><RxCross1 /></button>
				</div>
			</div>
		</div>
	)
}

export default Message
