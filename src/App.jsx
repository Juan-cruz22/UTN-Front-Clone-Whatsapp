import React from "react"
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from "./Screens/ContactScreen/ContactScreen"
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<ContactScreen/>}/>
          <Route path="/contact/:contact_id/messages" element={<ChatScreen/>}/>
        </Routes>
      </div>
  )
}

export default App
