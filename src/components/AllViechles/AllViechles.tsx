import { Link } from 'react-router-dom';
import img from '../../assets/imgs/Audi 1.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SomeViechles from '../SomeViechles/SomeViechles';


export default function AllViechles() {
  function getInputValue(elementId: string): string {
    const inputElement = document.getElementById(elementId) as HTMLInputElement;
    if (inputElement) {
      return inputElement.value;
    } else {
      return ""; 
    }
  }
  const nameInputValue = getInputValue("searchInput");
  let requestAll:string = 'https://freetestapi.com/api/v1/cars?';
  let requestSearch:string = `https://freetestapi.com/api/v1/cars?search=${nameInputValue}`;

  let [carsList, setCarsList] = useState([]);
  const getCarsList = async(request:any)=>{
     let response = await axios.get(request);
     setCarsList(response.data);

  
  }
  useEffect(() => {
    getCarsList(requestAll);
  }, []);




  return (
    <div className='container'>
       <div className='row p-3'>
        <p>
          <Link to='/Home'>Home /</Link>
          <span> Cars</span>
        </p>
      </div>
       <div className='row p-1'>
      <div className='mostpopbutton'><button type="button" className="btn btn-light">POPULAR RENTAL DEALS</button></div>
</div>

<div className='row p-1'>
<h1 className='text-center p-4'>Most popular cars rental deals</h1>

</div>
<div className='row p-1'>
<nav className="navbar navbar-light m-5">
  <div className="container">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-location-dot"></i></span>
      <input id='searchInput' type="text" className="form-control shadow" placeholder="search by model name" aria-label="Username" aria-describedby="basic-addon1"></input>
      <button onClick={()=>getCarsList(requestSearch)} className="btn btn-primary">Search</button>
    </div>
  </div>
</nav>
</div>
<div className='row p-5'>

 {
   carsList.map((car:object)=>(
     <SomeViechles key={car.id}  car = {car} />
     
   ))
 }
</div>

</div>
  )
}
