import React from 'react'
import Auth from "../utils/auth";

const Footer = () => {
  console.log(Auth.loggedIn())
  return (
    <footer className='flex justify-center bottom-0 w-100 border-2 border-black w-full'>
      <p className='p-5'>&copy; GreenCampusIndia</p>
    </footer>
  )
}

export default Footer
