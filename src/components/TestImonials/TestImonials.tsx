import React from 'react'
import img1 from '../../assets/imgs/girl.png'
import img2 from '../../assets/imgs/bgtest.png'
import img3 from '../../assets/imgs/Rectangle 8 (1).png'

export default function TestImonials() {
  return (
    <div className='conainer-fluid testimonials'>
      
      <div className='row text-center'>
      <button type="button" className="btn btn-light text-center">TEST IMONIALS</button>
      </div>
      <div className='row'>
      <h1 className='text-center p-4'>Most popular cars rental deals</h1>
      </div>
      <div className='row'>

      <div className='col-lg-6 col-sm-12'>
        <div className="card m-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img className="img-fluid rounded-start" src={img3}></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">5.5 stars</h1>
        <p><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></p>
        <article className="card-text fs-6">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</article>
        <h5 className="card-text mt-5">Charlie Johnson</h5>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>

        <div className='col-lg-6 col-sm-12'>
        <div className="card m-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img className="img-fluid rounded-start" src={img1}></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">5.5 stars</h1>
        <p><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i></p>
        <article className="card-text fs-6">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</article>
        <h5 className="card-text mt-5">Charlie Johnson</h5>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        
      </div>
    </div>
  )
}
