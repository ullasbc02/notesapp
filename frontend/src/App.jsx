import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Notes from "../components/Notes.jsx";
import Login from "../components/Login.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <h1>Notes-App</h1>
      <Routes>
        {/* Default route - go to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Notes Route */}
        {/* <Route path="/notes" element={<Notes />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
