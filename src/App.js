import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Signup from "./pages/signin";
import Landing from "./pages/landing";
import { useState } from 'react';

function App()
{
  const [users,setusers] = useState(
    [
    {
        username : "john",
        password:"123"
    }
])
return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path='/Signup'element={<Signup users={users} setusers={setusers}/>}></Route>
      <Route path='/Landing'element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App