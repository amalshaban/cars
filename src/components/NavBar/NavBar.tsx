import React from 'react';
import 'E:/react course/cars/node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/imgs/logo.png';


export default function NavBar() {
  return (
   <>
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent flexNav">
  <div className="container p-3">
    <img src={logo}></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto mb-lg-0">
        <li className="nav-item">
        <button className="btn btn-bold" type="submit">Become a renter</button>
        </li>
        <li className="nav-item">
        <button className="btn btn-bold" type="submit">Rental deals</button>
        </li>
        <li className="nav-item">
        <button className="btn btn-bold" type="submit">How it works</button>
        </li>
        <li className="nav-item">
        <button className="btn btn-bold" type="submit">Why choose us</button>
        </li>
        
      
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-bold" type="submit">Sign in</button>
        <button className="btn btn-primary" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</nav>
</div>
   </>
  )
}
