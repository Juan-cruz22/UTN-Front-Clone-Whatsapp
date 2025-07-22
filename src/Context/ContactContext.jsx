import { createContext } from "react";
import React from "react";

export const ContactContext = createContext();

const ContactContextProvider = ({children}) => {
    let valor_x = 10;
    return(
        <ContactContext.Provider value={{valor_x: valor_x}}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;