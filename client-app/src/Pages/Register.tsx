import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import {AiOutlineMail, AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import { FaRegUser } from "react-icons/fa";
import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import * as apiClient from '../api-client'; //import the apiClient
import { useAppContext } from '../Context/AppContext';

export type RegisterFormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};


const Register = () => {

  const {showToast} = useAppContext();

    const [passwordEye, setPasswordEye] = useState(false);
    const [ComfirmpasswordEye, setComfirmPasswordEye] = useState(false);

    //func... for password 
    const handlePasswordEye = () => {
      setPasswordEye(!passwordEye);
    }

    const handelComfirmpasswordEye = ()=>{
        setComfirmPasswordEye(!ComfirmpasswordEye)
    }


    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
      } = useForm<RegisterFormData>();


      const mutation = useMutation(apiClient.register_api,{
        onSuccess: async ()=>{
         showToast({message: "Registration success!", type: 'SUCCESS'});
        },
        onError: (error: Error)=>{
          showToast({message: error.message, type: 'ERROR'});
          //console.log(error.message);
        },
      })

      const onSubmitForm = handleSubmit((data)=>{
        mutation.mutate(data)
      });


  return (
    <div>
    <div className='max-w-[800px] m-auto px-4 pb-16'>
      <div className=' dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
        <h1 className='text-2xl font-bold text-green-800' > Register Account </h1> 
        <form onSubmit={onSubmitForm}>

          <div className='grid md:grid-cols-2 md:gap-8'>

          <div className='md:my-4'>
              <label>Username</label>
              <div className='my-2 w-full relative'>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type="text" 
                  placeholder='Enter your username' 
                  {...register("username", {required: "This fields is required"})}
                />
                <FaRegUser className='absolute right-2 top-3 text-gray-400' />
              </div>
              {errors.username && ( <span className="text-red-500">{errors.username.message}</span>)}
            </div>

          <div className='md:my-4'>
              <label>Email Address</label>
              <div className='my-2 w-full relative'>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type="email" 
                  placeholder='Enter Email Address' 
                  {...register("email", {required: "This fields is required"})} 
                />
                <AiOutlineMail className='absolute right-2 top-3 text-gray-400' /> 
              </div>
              {errors.email && ( <span className="text-red-500">{errors.email.message}</span>)} 
            </div> 

          </div>


          <div className='grid md:grid-cols-2 md:gap-8'>

          <div className='md:my-4'>
              <label>Password</label>
              <div className='my-2 w-full relative '>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type={(passwordEye === false) ? 'password' : 'text'} 
                  placeholder='Enter Password'
                  {...register("password", 
                  {
                    required: "This fields is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                    }
                })}
                />
                <div className='absolute right-2 top-3'>
                  {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
                </div>
              </div>
              {errors.password && ( <span className="text-red-500">{errors.password.message}</span>)}
            </div>

            <div className='md:my-4'>
              <label>Comfirm Password</label>
              <div className='my-2 w-full relative '>
                <input
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type={(ComfirmpasswordEye === false) ? 'password' : 'text'} 
                  placeholder='comfirm password'
                  {...register("confirmPassword", {
                    validate: (val) => {
                      if (!val) {
                        return "This field is required";
                      } else if (watch("password") !== val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                />
                <div className='absolute right-2 top-3'>
                  {(ComfirmpasswordEye === false) ? <AiFillEyeInvisible onClick={handelComfirmpasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handelComfirmpasswordEye} className='text-gray-400'/>}
                </div>
                {errors.confirmPassword && ( <span className="text-red-500">{errors.confirmPassword.message}</span>)}
              </div>
            </div>
          </div>

          <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and conditions & privacy policy</span></p>
                 
          <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#166534] text-white rounded-lg font-semibold'> Login Account </button>
        </form>

        
        <hr className="my-6 border-gray-300 w-full" />
     
        <button className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
          <div className="flex items-center justify-center">
          <FcGoogle className='w-7 h-7'/>
              <span className="ml-4"> Log in with Google </span>
          </div>
        </button>

        <p className='my-4'>Don't have an account? <Link className='text-[#986c55] underline' to='/login'>login</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Register;
