import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { StateAuth } from "./ContextApi/AuthContext";
import MyWallet from "./My Wallet/MyWallet";

function App() {
  return (
    <div className="App">
      <StateAuth>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/wallet" element={<MyWallet />} />
        </Routes>
      </StateAuth>
    </div>
  );
}

export default App;
