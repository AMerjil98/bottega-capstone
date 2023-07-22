import './styles/app.scss';
import {Routes, Route} from "react-router-dom";
import Layout from './layout';
import IndexPage from './pages/index-page';
import Login from './pages/login';
import Register from './pages/register';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/create-post';
import PostPage from './pages/postpage';
import EditPost from './pages/editpost';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;