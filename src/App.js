import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MenuBar from "./components/MenuBar";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { lightTheme, darkTheme } from "./context/themeContext";
import Quizz from "./components/Quizz";
import { store } from './store/store'
import { Provider } from 'react-redux'
import Admin from "./components/Admin";

function App() {
  const [mode, setMode] = useState(lightTheme);

  function onChangeMode(mode) {
    mode === false ? setMode(lightTheme) : setMode(darkTheme);
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={mode}>
        <BrowserRouter>
          <MenuBar onChangeMode={onChangeMode}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quizz" element={<Quizz />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
