import React from 'react'
import Button from './Button'

function Signin() {
  return (
    <div className='md:w-[100vw] '>
        <div className='flex items-center justify-center flex-col'>
        <div>
            <h1>Welcome to Get Fit</h1>
            <span>Please Login with your deatails</span>
        </div>

        <form action="">
            <div>
                <label htmlFor="">Email
                <input type="text" />
                </label>
                
            </div>
            <div>
                <label htmlFor="">Password
                <input type="password" />
                </label>
                
            </div>
            <span>do not have an account? SignUp</span>
        <Button/>
        </form>

        </div>
    </div>
    

  )
}

export default Signin