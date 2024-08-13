import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast,{Toaster} from 'react-hot-toast';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const [serverError, setServerError] = React.useState("");

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/users/signup", userInfo);
      console.log(res.data);
      if (res.data) {
        // alert("Signup Successful");
        toast.success("Signedin succesfully!");
        // Corrected the use of JSON.stringify
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }
    } catch (err) {
      console.log(err.message);
      setServerError(err.response?.data?.message || "Error: " + err.message);
     
    }
  }; 

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="p-10 w-[520px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
              <h3 className="font-bold text-lg">Signup</h3>

              {/* Server Error Message */}
              {serverError && <div className="text-red-500 mb-4">{serverError}</div>}
               
              {/* Name */} 
              <div className='mt-4 space-y-2'>
                <label className='block text-sm font-medium'>Name</label>
                <input 
                  type="text" 
                  placeholder='Enter your full name'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("fullname", { required: "This field is required" })}
                />
                {errors.fullname && <span className='text-red-500 block mt-1'>{errors.fullname.message}</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <label className='block text-sm font-medium'>Email</label>
                <input 
                  type="email" 
                  placeholder='Enter your email'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && <span className='text-red-500 block mt-1'>{errors.email.message}</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <label className='block text-sm font-medium'>Password</label>
                <input 
                  type="password" 
                  placeholder='Enter your password'
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: "This field is required" })}
                />
                {errors.password && <span className='text-red-500 block mt-1'>{errors.password.message}</span>}
              </div>

              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button 
                  type="submit" 
                  className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200 hover:px-5 hover:py-2'
                >
                  Signup
                </button>
                <p className='text-md'>Already Registered? {" "}
                  <Link to="/login" className='underline text-blue-500 cursor-pointer'>
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
