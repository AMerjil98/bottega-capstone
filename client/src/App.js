import './styles/app.scss';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./pages/header";
import Post1 from "./pages/post-1";
import Layout from './layout';
import IndexPage from './pages/index-page';
import Login from './pages/login';
import Register from './pages/register';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/create-post';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;