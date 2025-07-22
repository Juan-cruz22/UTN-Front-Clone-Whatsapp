import React from "react"
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import {Route, Routes} from 'react-router-dom'
import { useParams, useLocation } from "react-router-dom";
import style from './App.module.css'

function App() {

  const location = useLocation();

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <ContactScreen />
      </div>
      <div className={style.chat}>
        <Routes location={location}>
          <Route path="/contact/:contact_id/messages" element={<ChatScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
