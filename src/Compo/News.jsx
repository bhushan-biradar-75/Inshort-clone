import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Newsitem from './Newsitem';
import { BrowserRouter, Route , Routes } from 'react-router-dom';



function App(props) {
  const [state, setstate] = useState([])

  const showdata = (event) => {
    // event.preventDefault();

// const displaynews = useContext(newsdata);

    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3f34d76c846642b89f17ac26561156b4`).then((response) => {
      var result = response.data.articles;
      setstate(response.data.articles)
      console.log(result);
    })
  }

  useEffect(() => {
    document.title = `${(props.category)}`;
    showdata(); 
}, [])

  return (
    <div>
      {/* <button onClick={showdata}>News Compo ss</button> */}
      <div className="conatiner">
        {
          state.map((element,index) => {
            return <> 
              <div className='col-md-4'>
                <Newsitem key={index} data={element} />
                  <App btndata={showdata}/>
              </div>
            </>
          })
        }
      </div>
    </div>
  )
}
export default App;
// export { newsdata };