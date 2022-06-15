import React from 'react';
import image2 from "../assets/slider3.jpg";
import image3 from "../assets/slider2.jpg";
import image4 from "../assets/slider1.jpg";

function slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
     <div className="carousel-item active">
      <img src={image4} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block"> 
      <h5>Welcome to the MovieMis</h5>
        <p >Now, you can add your favourite movies to watchlist</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Check it out!!!!</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default slider