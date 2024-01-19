import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout/Layout";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


const App = () => {
  return (
    <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Homg page</p></Layout>} />
        <Route path="/register" element={<Layout><p><Register/></p></Layout>} />
        <Route path="/login" element={<Layout><p><Login/></p></Layout>} /> 
      </Routes>
    </Router>
    </>
  )
};

export default App;
