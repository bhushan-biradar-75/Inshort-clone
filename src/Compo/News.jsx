import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Newsitem from './Newsitem';

function App(props) {
  const [state, setstate] = useState([])

  const showdata = () => {
                                           // geting data from api

    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3f34d76c846642b89f17ac26561156b4`).then((response) => {
      var result = response.data.articles;
      setstate(response.data.articles)
      console.log(result);
    })
  }

  useEffect(() => {
    showdata();     //avoiding re-rendering
  }, [])

  return (
    <div>
      <div className="conatiner">
        {
          state.map((element, index) => {
            return <>
              <div className='col-md-4'>
                <Newsitem key={index} data={element} />
                                                              {/* props drilling */}
                <App btndata={showdata} />
              </div>
            </>
          })
        }
      </div>
    </div>
  )
}
export default App;
