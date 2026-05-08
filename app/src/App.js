import { Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import FQA from "./FQA";
import Login from "./Login"
import Welcome from "./Welcome"
import Report from "./Report"
import Result from "./Result"
import Products from "./Products"
import Product from "./Product"
const App = () => {
  
  return (

    <>

    <ol>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/fqa">FQA</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/Result">Result</Link>
        </li>

        

        <li>
          <Link to="/Products">Products</Link>
        </li>

       


      </ol>

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/fqa" element={<FQA/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/report" element={<Report/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/Products" element={<Products/>}/>
      <Route path="/product/:code/:price/:qty"element={<Product />}/>
      



    </Routes>
    </>

  )
}

export default App;