
// showing the card item with the help of prop drilling

const Newsitem = (data) => {

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="main">
            <div className="card" id="res-card" style={{ width: "800px", height: "500px" }}>
              <div className="card-body">
                <h5 className="card-title">{data.data.title}</h5>
                <p className="card-text">{data.data.description}</p>
                <p className="card-text"><small className="text-muted"><b>{data.data.author ? data.data.author : "unknown author"}</b>  </small></p>
                <p className="card-text"><small className="text-muted"><strong>{data.data.publishedAt}</strong></small></p>
                <img className='img-fluid' id='card-img' src={data.data.urlToImage ? data.data.urlToImage : "not found"} className="card-img-top" alt="..." />
                <hr />
                <br />
              </div>
            </div>
          </div>
        </div>

      </div>

    </>

  )
}

export default Newsitem

