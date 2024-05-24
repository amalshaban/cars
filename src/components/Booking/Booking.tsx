
import icon1 from '../../assets/imgs/ios.png'
import icon2 from '../../assets/imgs/andriod.png'
import img from '../../assets/imgs/iPhone-14.png'
import { toFormData } from 'axios'
import React, { useState } from 'react';
import axios from 'axios';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://your-api-endpoint.com/posts', formData);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='container-fluid booking'>
      <div className='row'>
        <div className='col-lg-6 col-sm-12 pt-5 ps-5'>
        <h1 className=''>Download Rentcars App for <span className='text-primary'>FREE</span></h1>
        <p>For faster, easier booking and exclusive deals.</p>
         <div>
            <img className='p-1' src={icon1}></img>
            <img className='p-1' src={icon2}></img>
         </div>
         <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <input autoComplete='aaa' type='text' name="name" onChange={handleChange} className='form-control m-2' placeholder='Name' value={formData.name}></input>
    <input autoComplete='123' type="phone" name="phone" onChange={handleChange} className="form-control m-2" placeholder='Phone Number' value={formData.phone}></input>
    <input autoComplete='aa@bbb' type="email" name='email' onChange={handleChange} className="form-control m-2" placeholder='E-mail' value={formData.email}></input>
  </div>
  <button type="submit" className="btn btn-primary">Send</button>
</form>
        </div>
        <div className='col-lg-6 col-sm-12 text-center'>
          <img className='iphon' src={img}></img>
        </div>
      </div>
    </div>
  )
}
