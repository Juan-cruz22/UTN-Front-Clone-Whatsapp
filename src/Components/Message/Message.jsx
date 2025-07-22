import React, { useState } from 'react'
import style from './Message.module.css'

const Message = ({ emisor, hora, id, texto, status, deleteMessageById }) => {
	const [message_selected, setMessageSelected] = useState(false)
	const isMine = emisor === 'YO'

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}

	return (
		<div className={style.message_container_wallpaper}>
		<div className={`${style.message_container} ${isMine ? style.mine : style.other}`}onContextMenu={handleChangeMessageSelected}>
			<div className={style.message_bubble}>
				<p>{texto}</p>
				<span className={style.message_time}>{hora}</span>
				{message_selected && (
					<button onClick={() => deleteMessageById(id)}>Eliminar</button>
				)}
			</div>
		</div>
		</div>
	)
}

export default Message
