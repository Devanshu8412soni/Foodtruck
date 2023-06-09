import React from 'react';
import logo from "../Images_Main/logo.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
    <footer>
      <div className='main_footer'>
      <div className='logo_image'>
        <img src={logo} alt='logo'/>
        </div>
        <div className='contact_us'>
            <h3>Contact Us</h3>
            <p id='p1'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p id='p2'>example2020@gmail.com</p>
            <p id='p3'>(904) 443-0343</p>
        </div>
        <div className='more'>
            <h3>More</h3>
            <p id='p1'>pbout Us</p>
            <p id='a2'>Products</p>
            <p id="a3">Career</p>
            <p id='a4'>Contact Us</p>
        </div>
        <div className='social'>
        <div className='social_links'>
        <h3> Social Links</h3>
            <p id='a1'><InstagramIcon /></p>
            <p id='a2'><TwitterIcon /></p>
            <p id='a3'><FacebookIcon /></p>
            </div>
            <p>© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
