import React from 'react'
import logo from '../../assets/imgs/logowhite.png'
export default function Footer() {
  return (
    <div className='container-fluid footer'>
      <div className='row'>
      <div className='col-lg-1'></div>
        <div className='col-lg-2'>
          <img className='mb-3' src={logo}></img>
          <p><i className="fa-solid fa-location-dot pe-3"></i>25566 Hc 1, Glenallen,Alaska, 99588, USA</p>
          <p><i className="fa-solid fa-phone pe-3"></i>+603 4784 273 12</p>
          <p><i className="fa-solid fa-envelope pe-3"></i>rentcars@gmail.com</p>
        </div>
        <div className='col-lg-2'>
          <h6 className='mb-3'>Our Products</h6>
          <ul>
            <li>career</li>
            <li>cars</li>
            <li>packages</li>
            <li>features</li>
            <li>Priceline</li>
          </ul>
        </div>
        <div className='col-lg-2'>
        <h6 className='mb-3'>Reasources</h6>
          <ul>
            <li>download</li>
            <li>help center</li>
            <li>guides</li>
            <li>partener network</li>
            <li>Cruises</li>
            <li>developer</li>
          </ul>
        </div>
        <div className='col-lg-2'>
        <h6 className='mb-3'>About Rentcars</h6>
          <ul>
            <li>why choose us</li>
            <li>our story</li>
            <li>Investor Relations</li>
            <li>press center</li>
            <li>Advertise</li>
          </ul>
        </div>
        <div className='col-lg-2'>
          <h6 className='mb-3'>follow us</h6>
          <i className="fa-brands fa-square-facebook m-1 fs-4"></i>
          <i className="fa-brands fa-square-instagram m-1 fs-4"></i>
          <i className="fa-brands fa-square-youtube m-1 fs-4"></i>
        </div>
      <div className='col-lg-1'></div>
      </div>
      <div className='row'>
        <hr></hr>
        <p className='ps-5'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
      </div>
    </div>
  )
}
