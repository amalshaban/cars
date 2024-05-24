import { Link, useParams } from 'react-router-dom';
import img from '../../assets/imgs/Audi 1.png';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function Details() {

  let { carId } = useParams();

  let [carDetails, setCarDetails] = useState([]);
 let request = `https://freetestapi.com/api/v1/cars/${carId}`;
  const getCarDetails = async(request:any)=>{
     let response = await axios.get(request);
     setCarDetails(response.data);
  }
  useEffect(() => {
    getCarDetails(request);
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row p-5'>
        <p>
          <Link to='/Home'>Home /</Link>
          <span> Cars /</span>
          <span> Car Details /</span> 
          <span className='text-danger'>{`${carDetails.make} ${carDetails.model}`}</span>
        </p>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          
        <img className='detailsImg' src={img}></img>
        </div>
        <div className='col-lg-6 col-md-6 p-2'>
        <button type="button" className="btn btn-light text-primary">WHY CHOOSE US</button>
        <h1 className='fs-3 fw-b p-5'>We offer the best experience with our rental deals</h1>
        <p><i className="fa-regular fa-user"></i><span className='text-danger fs-5 p-2'>{carDetails.owners}</span><small>Passengers</small></p>
        <p><i className="fa-solid fa-fan"></i><span className='text-danger fs-5 p-2'>{carDetails.fuelType}</span></p>
        <p><i className="fa-solid fa-network-wired"></i><span className='text-danger fs-5 p-2'>{carDetails.transmission}</span></p>
        <p><i className="fa-solid fa-door-open"></i> Year <span className='text-danger fs-5 p-2'>{carDetails.year}</span></p>
        <p><i className="fa-solid fa-money-bill"> Price </i><span className='text-danger fs-5 p-2'>{carDetails.price}</span></p>
        
        </div>
      </div>
    </div>
  )
}
