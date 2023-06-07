import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Password from "./pages/Password";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <Router>
      <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgot-password" element={<Password/>}/>
        <Route path="/profile" element={<Profile/>}/>
       </Routes>
    </Router>
   </>
  );
}

export default App;
