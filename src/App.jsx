import React, { useEffect, useState } from "react";
import ChatScreen from './Screens/ChatScreen/ChatScreen';
import ContactScreen from "./Screens/ContactScreen/ContactScreen";
import ContactDescription from "./Screens/ContactDescription/ContactDescription";
import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import style from './App.module.css';

function App() {
  const location = useLocation();
  const isChatRoute = useMatch("/contact/:contact_id/messages");
  const isDescriptionRoute = useMatch("/contact/:contact_id/description");


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const showSidebar = !isMobile || (isMobile && !isChatRoute && !isDescriptionRoute);
const showChat = !isMobile || (isMobile && (isChatRoute || isDescriptionRoute));

  return (
    <div className={style.container}>
      {showSidebar && (
        <div className={style.sidebar}>
          <ContactScreen />
        </div>
      )}
      {showChat && (
        <div className={style.chat}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <div className={style.select_prompt}>
                  <p>Selecciona un chat para hablar</p>
                </div>
              }
            />
            <Route path="/contact/:contact_id/description" element={<ContactDescription />} />
            <Route path="/contact/:contact_id/messages" element={<ChatScreen />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
