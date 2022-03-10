import React,{useState}from 'react'
import News from './Compo/News'
import Navbar from './Compo/Navbar';
import Headline from './Compo/Headline';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(btndata) {

  console.log(btndata)

  return (

    <div>

      <BrowserRouter>
        <Navbar getnews={btndata} /> 
                                      {/* //passing props to nav bar */}
        <Headline />
        <Routes>
                                      {/* routing and destructuring api */}
          <Route path="/sports" element={<News category="sports" />}></Route>
          <Route path="/health" element={<News category="health" />}></Route>
          <Route path="/entertainment" element={<News category="entertainment" />}></Route>
          <Route path="/science" element={<News category="science" />}></Route>
          <Route path="/general" element={<News category="general" />}></Route>
          <Route path="/business" element={<News category="business" />}></Route>
          <Route path="/technology" element={<News category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
