
import { Link } from 'react-router-dom';
import img3 from '../../assets/imgs/car3.png';


export default function SomeViechles(props) {
    let { car } = props;
  


    // let carDetails =[];
  // let carId = useParams();
  // <Route path="/Details/:carId" element={<Details />} />

      // const navigate = useNavigate();
       
        
    

      return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <div className="card-group">
  <div className="card shadow p-2 m-1">
    <img className='card-img-top p-3' src={img3} ></img>
    <div className="card-body">
      <h5 className="card-title">{`${car.make} ${car.model}`}</h5>
      <p className="card-text"><i className="fa-solid fa-star text-warning"></i><span className="font-weight-bold">4.6</span>(1345 reviews)</p>
      <p className='card-text'><i className="fa-regular fa-user"></i>{car.owners} Passenger <i className="fa-solid fa-fan"></i>{car.horsepower}</p>
      <p className='card-text'><i className="fa-solid fa-globe me-5"> {car.year}</i><i className="fa-solid fa-truck-monster"></i>{car.transmission}</p>
    </div>
    <div className="card-footer">
      <p className='card-text fs-6'><span className='me-5'>Price:</span> ${car.price}/day </p>
      <Link to={`/Details/${car.id}`} className='btn btn-primary w-100'>
        view details
        <i className="fa-solid fa-arrow-right ms-5"></i></Link>
    </div>
  </div>
</div>
</div>
  )
}
