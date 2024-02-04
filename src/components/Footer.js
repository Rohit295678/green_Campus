// import React from 'react'
// import Auth from "../utils/auth";

// const Footer = () => {
//   console.log(Auth.loggedIn())
//   return (
//     <footer className='flex justify-center bottom-0 w-100 border-2 border-black w-full'>
//       <p className='p-5'>&copy; GreenCampusIndia</p>
//     </footer>
//   )
// }

// export default Footer

'use client';
// import logo from '../assets/images/logo-no-background.png'
import { Footer } from 'flowbite-react';

export default function Component() {
  return (
    <Footer container className=''>
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            
            alt="CampusGreen Logo"
            name="CampusGreen"
            
          />
          <Footer.LinkGroup className=''>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="GreenCampus™ " year={2024} />
      </div>
    </Footer>
  );
}
