import React from 'react'
import ItemList from './ItemList'
const ItemListContainter = () => {
  return (
  
    <div>       
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src="https://http2.mlstatic.com/D_NQ_889862-MLA52141642585_102022-OO.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://http2.mlstatic.com/D_NQ_677105-MLA52236130196_112022-OO.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://http2.mlstatic.com/D_NQ_943780-MLA52209012524_102022-OO.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://http2.mlstatic.com/D_NQ_834235-MLA52222526658_102022-OO.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
      <ItemList/>
      </div>
  )
}

export default ItemListContainter