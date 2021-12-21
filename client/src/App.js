import "./App.css";
import Home from "./pages/Home";
import Public from "./pages/Public";
import Protected from "./pages/Protected";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import RequireAuth from "./components/RequireAuth";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./components/Users";
import UserShow from "./components/UserShow";
import Posts from "./components/Posts";
import UserForm from "./components/UserForm";
import PostForm from "./components/PostForm";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* public routes go here */}
        <Route path="/public" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserShow/>}/>
        <Route path="/users/:id/edit" element = {<UserForm/>}/>
        <Route path="/users/:id/posts" element={<Posts/>}/>
        <Route path = "/users/:user_id/posts/:id/edit" element = {<PostForm />}/>
        <Route element={<RequireAuth />}>
          {/* protected routes go here */}
        <Route path="/" element={<Home />} />
          <Route path="/protected" element={<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
