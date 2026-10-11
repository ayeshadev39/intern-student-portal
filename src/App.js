import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, CssBaseline, IconButton, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetail from "./pages/StudentDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Khan", email: "ali@test.com", course: "React", age: 22 },
    { id: 2, name: "Ayesha Ahmed", email: "ayesha@test.com", course: "Node.js", age: 21 },
    { id: 3, name: "Hamza Ali", email: "hamza@test.com", course: "Python", age: 23 },
  ]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route
            path="/students"
            element={<Students students={students} setStudents={setStudents} />}
          />
          <Route
            path="/add"
            element={<AddStudent students={students} setStudents={setStudents} />}
          />
          <Route
            path="/student/:id"
            element={<StudentDetail students={students} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="bottom-right" theme={darkMode ? "dark" : "light"} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;