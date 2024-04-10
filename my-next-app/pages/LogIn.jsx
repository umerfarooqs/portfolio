import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {logReq} from "./redux/Sing"
import { useRouter } from 'next/router';
import Head from 'next/head';

const LoginIn = () => {

  // import dispatch to dispath function
  let dispatch = useDispatch();
  // import rouetr
  let router = useRouter();
  // check for loading request
  let loading = useSelector(state => state.Sign.loading);

// login useState
let [FormData,setFormData] = useState({
  email : "",
  password : ""
});


// on change function
let handleChange = (e) => {
  let {name,value} = e.target;
 setFormData((preval)=>({
  ...preval,
  [name] : value
 }))
}

// submit form 
let handleSubmit = async(e) => {
  e.preventDefault();
  let req= await dispatch(logReq(FormData));
  if(req.payload.success){
    alert("login Successfull");
    localStorage.setItem("token",JSON.stringify(req.payload.token));
    return router.push("/")
  }else{
    alert(req.payload.msg)
  }

}

  return (
    <section className="h-screen py-8">
      <Head>
        <title>CodeSea - LogIn Page</title>
      </Head>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href={"/"} className="flex items-center mb-6 text-2xl font-semibold ">
            <img className="w-12 h-12 rounded-full mr-2" src="./images/codesea-logo/default.png" alt="logo" />
            codeSea
        </Link>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input value={FormData.email} onChange={handleChange}  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input value={FormData.password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 font-bold">Remember me</label>
                            </div>
                        </div>
                    
                    </div>
                    <button type="submit" className={` ${loading ? "cursor-wait" : "cursor-pointer"} w-full text-white  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>Sign in</button>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <Link href={"/Singup"} className="font-medium text-blue-600 hover:underline dark:text-primary-500">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default LoginIn