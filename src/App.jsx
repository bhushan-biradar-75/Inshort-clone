import React from 'react'
import News from './Compo/News'
// import Newsitem from './Compo/Newsitem'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Compo/Navbar';
import './App.css'
// import Newsitem from './Compo/Newsitem';
import { useState } from 'react/cjs/react.production.min';
import Headline from './Compo/Headline';

function App(btndata) {

  console.log(btndata)
  // const [mode , setmode] = useState('light');

  // const tooglemode = () => {
  //   if(mode == 'light')
  //   {
  //     setmode('dark')
  //     document.body.style.background = '#042743';
  //   }
  //   else{
  //     setmode('light')
  //     document.body.style.background = 'white';
  //   }
  // }
  return (
    
    <div>
      
      <BrowserRouter>
        <Navbar  getnews={btndata}/>
        <Headline/>
        <Routes>
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
// export { newsdata };