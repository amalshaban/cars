import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SomeViechles from '../SomeViechles/SomeViechles';

export default function MostPopular() {
  function getInputValue(elementId: string): string {
    const inputElement = document.getElementById(elementId) as HTMLInputElement;
    if (inputElement) {
      return inputElement.value;
    } else {
      return ""; 
    }
  }
  const nameInputValue = getInputValue("searchInput");

  
  let requestLimit:string = 'https://freetestapi.com/api/v1/cars?limit=5';
  let requestAll:string = 'https://freetestapi.com/api/v1/cars?';
  let requestSearch:string = `https://freetestapi.com/api/v1/cars?search=${nameInputValue}`;
// somevichels the default view of ramdom 5 cards
  let [carsList, setCarsList] = useState([]);
  const getCarsList = async(request:any)=>{
     let response = await axios.get(request);
     setCarsList(response.data);
  }
  useEffect(() => {
    getCarsList(requestLimit);
  }, []);


  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/AllViechles');  
  };




  return (
    <div className='container'>
<nav className="navbar navbar-light m-5">
  <div className="container">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-location-dot"></i></span>
      <input id='searchInput' type="text" className="form-control shadow" placeholder="search by model name" aria-label="Username" aria-describedby="basic-addon1"></input>
      <button onClick={()=>getCarsList(requestSearch)} className="btn btn-primary">Search</button>
    </div>
  </div>
  
</nav>


<div className='carslist'>
 <div className='mostpopbutton'><button type="button" className="btn btn-light">POPULAR RENTAL DEALS</button></div>
   <h1 className='text-center p-4'>Most popular cars rental deals</h1>
 <div className='row'>
 {
   carsList.map((car:object)=>(
     <SomeViechles key={car.id}  car = {car} />
      
   ))
 }
 </div>
     </div>
     <div className='col-12 text-center m-4'>
          <button onClick={handleClick} className='btn btn-outline-primary pe-5 ps-5'>
            show all veichles 
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
    </div>

  );
  }