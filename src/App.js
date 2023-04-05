import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/blogs/Blogs";
import GastLoggers from "./pages/gastloggers/GastLoggers";
import Webshop from "./pages/webshop/Webshop";

import "./styles/style.css";
// const queryClient = new QueryClient({});
 
function App (){
  return (<div className="app">
    
<Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="gastloggers" element={<GastLoggers />}></Route>
          <Route path="webshop" element={<Webshop />}></Route>
        </Routes> 


    </div>);
};

export default App;

