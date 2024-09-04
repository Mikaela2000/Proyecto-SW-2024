import "./App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Landing from './components/views/Landing';
import LoginPanel from "./components/inc/LoginPanel";

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* <Route path="/loginPanel" element={<LoginPanel/>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
