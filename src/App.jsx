import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <div className="rect"></div>
      <Main  isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  );
}

export default App;
