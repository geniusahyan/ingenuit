"use client"
import React, { useState } from 'react'

const page = () => {
  const [logSign, setLogSign] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleLoginSubmit = async (e)=>{
    e.preventDefault();
    console.log(user)
  }

  const handleSignSubmit = async (e)=>{
    e.preventDefault();
  }


  const signinpage = (
    <div className="glass md:w-[30rem] w-[20rem]  h-[40rem] bg-[#2b68ad7a] p-2 box-border rounded-sm  ">
        <h1 className="text-4xl mx-auto w-[16rem] uppercase text-center font-bold text-[#2bc8d3] mt-8" >Ingenuit</h1>
        <h1 className="text-4xl font-bold text-[#2bc8d3] mt-8">Sign In</h1>
        <form onSubmit={handleSignSubmit} className="flex  flex-col gap-y-5 mt-10">

          {/* email */}
            <input 
            type="text" 
            name="username" 
            id="username" 
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
            placeholder="Enter Your Username" 
            className="input input-bordered h-16 text-xl text-white bg-transparent input-info mx-5" required />

            <input 
            type="email" 
            name="email" 
            id="email" 
            value={user.email}
            placeholder="Email Address" 
            onChange={(e) => setUser({...user, email: e.target.value})}
            className="input input-bordered h-16 text-xl text-white bg-transparent input-info mx-5" required/>

          {/* password */}
            <input 
            type="password" 
            name="password" 
            value={user.password}
            id="password" 
            placeholder="Enter Your Password" 
            onChange={(e) => setUser({...user, password: e.target.value})}
            className="input  h-16 input-bordered input-info mx-5 text-xl bg-transparent" required/>

            <button type='submit' className='btn bg-blue-200 w-[12rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Create </button>
        </form>
        <div className=" text-center flex flex-col gap-6 text-white my-4  "> 
          <p className="text-xl text-[#0000009d]">Already have an account?</p>
          <button onClick={()=>setLogSign(!logSign)} className='btn bg-blue-200 w-[18rem] md:w-[20rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Log In </button>
        </div>
    </div>
)
const loginpage = (
    <div className="glass md:w-[30rem] w-[20rem] h-[40rem] bg-[#2b68ad7a] p-2 box-border rounded-sm  ">
        <h1 className="text-4xl mx-auto text-center w-[16rem] uppercase font-bold text-[#2bc8d3] mt-8" >Ingenuit</h1>
        <h1 className="text-4xl font-bold text-[#2bc8d3] mt-8">Login</h1>
        <form onSubmit={handleLoginSubmit} className="flex  flex-col gap-y-10 mt-16">

          {/* email */}
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={user.email}
            placeholder="Email Address" 
            onChange={(e) => setUser({...user, email: e.target.value})}
            className="input input-bordered h-16 text-xl text-white bg-transparent input-info mx-5" />

          {/* password */}
            <input 
            type="password" 
            name="password" 
            value={user.password}
            id="password" 
            placeholder="Enter Your Password" 
            onChange={(e) => setUser({...user, password: e.target.value})}
            className="input  h-16 input-bordered input-info mx-5 text-xl bg-transparent" />

            <button type='submit' className='btn bg-blue-200 w-[12rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Login </button>
        </form>
        <div className=" text-center flex flex-col gap-6 text-white my-4  "> 
          <p className="text-xl text-[#0000009d]">Don't have an account?</p>
          <button onClick={()=>setLogSign(!logSign)} className='btn bg-blue-200 w-[18rem] md:w-[20rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Sign In </button>
        </div>
    </div>
)

  return (
    <section className='w-screen h-screen grid place-content-center ' >
      { logSign ? signinpage : loginpage }
    </section>
  )
}

export default page