
import React from 'react';
import './ServiceItems.css';

const ServiceItems = () => {

return (
  <div className="cover">

<div className="container">
           <h1 className="header"> Check out our services </h1><br />
            <div className="gallery">
                <figure class="gallery__item gallery__item--1">
                    <img src="images/services3.jpeg" alt="" className="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src="images/services5.jpg" alt="" className="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src="images/services4.jpg" alt="" className="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src="images/service1.jpg" alt="" className="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src="images/services2.jpg" alt="" className="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src="images/services6.jpg" alt="" className="gallery__img" />
                </figure>
            </div>
        </div>

  </div>
);

}

export default ServiceItems;