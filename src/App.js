import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from "./components/main/main"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
      
    </Routes>
  </div>  );
}
export default App;
