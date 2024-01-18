import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layout/Layout";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Homg page</p></Layout>} /> 
      </Routes>
    </Router>
  )
};

export default App;
