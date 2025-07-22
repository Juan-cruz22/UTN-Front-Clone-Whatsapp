import React from 'react'
import style from './NewMessageForm.module.css'

const NewMessageForm = ({ addNewMessage }) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        addNewMessage(new_message_text)
        event.target.message.value = ''
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm} className={style.form_container}>
            <div className={style.message_form}>
                <input
                    className={style.message_input}
                    type="text"
                    placeholder='Escribe un mensaje...'
                    id='message'
                    name='message'
                    required
                />
                <button type='submit'>Enviar</button>
            </div>
        </form>
    )
}

export { NewMessageForm }
