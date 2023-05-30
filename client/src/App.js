import './styles/app.scss';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./pages/header";
import Post1 from "./pages/post-1";
import Layout from './layout';
import IndexPage from './pages/index-page';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;