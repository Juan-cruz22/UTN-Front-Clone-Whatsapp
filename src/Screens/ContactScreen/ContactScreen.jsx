import React from "react";
import { useState } from "react";
import ContactList from '../../Components/ContactList/ContactList'
import {getContactList} from '../../Services/contactServices'
import style from './ContactScreen.module.css'
import { CiSearch } from "react-icons/ci";
import { Route } from "react-router";


const ContactScreen = () =>{
    const contacts = getContactList()
    const [contactsState, setContactsStates]= useState(contacts);

    return(
        <div className={style.ContainerChats}>
            <div className={style.Header}>
                <h1>WhatsApp</h1>
            </div>
            <div className={style.SearchBarContainer}>
                <span className={style.SearchIcon}><i><CiSearch/></i></span>
                <input placeholder="Buscar un chat o iniciar uno nuevo" type="text"></input>
            </div>
            <div className={style.ListOptions}>
                <li>Todos</li>
                <li>No leídos</li>
                <li>Favoritos</li>
                <li>Grupos</li>
            </div>
                <ContactList contacts={contactsState}/>
        </div>
    )
};

export default ContactScreen;

