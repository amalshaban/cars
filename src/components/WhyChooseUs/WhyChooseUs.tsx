import React from 'react'
import img from '../../assets/imgs/Audi 1.png'
export default function WhyChooseUs() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-5 col-md-12'>
        <img className='whyImge' src={img}></img>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-6 col-md-12'>
        <button type="button" className="btn btn-light mb-5">WHY CHOOSE US</button>
        <h3 className='p-2'>We offer the best experience with our rental deals</h3>

          <div className='row whyrow p-4'>
            <i className="col-2 fa-solid fa-user"></i>
            <article className='col-10 ps-3 pe-5'>
              <h6>Best price guaranteed</h6>
              <small>Find a lower price? We will refund you 100% of the difference.</small>
            </article>
          </div>
          <div className='row whyrow p-4'>
            <i className="col-2 fa-solid fa-user"></i>
            <article className='col-10 ps-3 pe-5'>
              <h6>24 hour car delivery</h6>
              <small>Book your car anytime and we will deliver it directly to you.</small>
            </article>
          </div>
          <div className='row whyrow p-4'>
          <i className="col-2 fa-solid fa-calendar-days"></i>
            <article className='col-10 ps-3 pe-5'>
              <h6>Best price guaranteed</h6>
              <small>Find a lower price? We’ll refund you 100% of the difference.</small>
            </article>
          </div>
          <div className='row whyrow p-4'>
            <i className="col-2 fa-solid fa-comments"></i>
            <article className='col-10 ps-3 pe-5'>
              <h6>24/7 technical support</h6>
              <small>Have a question? Contact Rentcars support any time when you have problem.</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
