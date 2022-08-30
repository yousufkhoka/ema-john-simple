import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser , setLoggedInUser] = useContext(userContext)
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      
      <form onSubmit={handleSubmit(onSubmit)} className='shipment-form'>   
        <input  defaultValue={loggedInUser.name} {...register("name", { required: true })}  className='form-control' placeholder='Your Name' />
        {errors.name && <span className='error'>name is required</span>}
       
        <input defaultValue={loggedInUser.email} {...register("email", { required: true })}  className='form-control' placeholder='Your Email'/>
        {errors.email && <span className='error'>email is required</span>}
        
        <input {...register("address", { required: true })}  className='form-control' placeholder='Your Address'/>
        {errors.address && <span className='error'>address is required</span>}
       
        <input {...register("phone", { required: true })} className='form-control' placeholder='Your Phone Number'/>
        {errors.phone && <span className='error'>phone Number is required</span>}
        
        <input type="submit" className='form-control'/>
      </form>
    )
};

export default Shipment;