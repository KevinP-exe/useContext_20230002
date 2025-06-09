import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from "./pages/Information";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Portafolio from  "./pages/Portafolio";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/portafolio" element={<Portafolio />} />
        <Route element={<PrivateRoute />}>
        <Route path="/information" element={<Information />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App; 
