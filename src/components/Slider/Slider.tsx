
import slidecar from '../../assets/imgs/car 2 1.png';


export default function Slider() {
  

  
  return (
  
 
    <div className='container-fluid'>

    <div className='row'>

      <div className='col-lg-5 col-md-12 col-sm-12'>
        <div className='headertxt'>
      <h1>Find, book and rent a car <span className='text-primary'>Easily</span></h1>
      <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
      </div>
      </div>
      <div className='col-lg-7 col-md-12 col-sm-12'>
        <img className='sliderImg' src={slidecar}></img>
      </div>
    </div>
  </div>
  
  )
}
