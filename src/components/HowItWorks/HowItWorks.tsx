import React from 'react'
import  img1 from '../../assets/imgs/parteners/img1.png'
import img2  from '../../assets/imgs/parteners/img2.png'
import img3  from '../../assets/imgs/parteners/img3.png'
import img4  from '../../assets/imgs/parteners/img4.png'

export default function HowItWorks() {
  return (
    <div className='container howItWorks p-5'>
       
      <div className='row'>
        <div className='col-12 text-center'>
 <button type="button" className="btn btn-light">HOW IT WORKS</button>
        </div>
        </div>  
      <div className='row'>
        <div className='col-12'>
        <h1 className='text-center p-4'>Most popular cars rental deals</h1>
        </div>
        </div>  
      <div className='row howitworksrow'>
      
      <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
      <i className="fa-solid fa-circle-check iconstyle"></i>
          <h5>Choose location</h5>
          <p>Choose your and find your best car</p>  
      </div>  
      <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
      <i className="fa-solid fa-car iconstyle"></i>
          <h5>Pick-up date</h5>
          <p>Select your pick up date and time to book your car</p>  
      </div>  
      <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
      <i className="fa-solid fa-circle-check iconstyle"></i>
          <h5>Book your car</h5>
          <p>Book your car and we will deliver it directly to you</p>  
      </div>  
      </div>  
      <div className='row parteners'>
        <div className='col-lg-3 col-md-6 col-sm-12'><img src = {img1}></img></div>
        <div className='col-lg-3 col-md-6 col-sm-12'><img src = {img2}></img></div>
        <div className='col-lg-3 col-md-6 col-sm-12'><img src = {img3}></img></div>
        <div className='col-lg-3 col-md-6 col-sm-12'><img src = {img4}></img></div>
        </div>  
    </div>
  )
}
