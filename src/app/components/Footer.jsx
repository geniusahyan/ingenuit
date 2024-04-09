import React from 'react'

const Footer = () => {
  return (
    <section className='w-screen h-screen bg-[#0a1d50] text-[#c7c6c6] flex flex-col py-20 px-20 ' >
      <div className="about-dropmenu capitalize pt-4 flex -left-[28rem]  justify-around w-full py-4  ">
        <div>
          <h1 className='text-[0.9rem] mb-2 font-bold' >web and mobile app design</h1>
          <li>web design</li>
          <li>web mobile app design</li>
          <li>ecommerce wesite design</li>
          <li>ux design</li>
        </div>
        <div>
          <h1 className='text-[0.9rem] mb-2 font-bold' >web and mobile app development</h1>
          <li>website development</li>
          <li>mobile app development</li>
          <li>cms website development</li>
          <li>php website developent</li>
          <li>jsp website developent</li>
          <li>ecommerce website development</li>
          <li>travel website developent</li>
          <li>smart contract developent</li>
          <li>blockchain development</li>
        </div>
        <div>
          <h1 className='text-[0.9rem] mb-2 font-bold' >online marketing</h1>
          <li>seach engine optimization</li>
          <li>pay per click services</li>
          <li>email marketing</li>
          <li>social media optimization</li>
        </div>
        <div>
          <h1 className='text-[0.9rem] mb-2 font-bold' >others</h1>
          <li>server management</li>
          <li>integration</li>
          <li>web hosting services</li>
          <li>domain name registration</li>
        </div>
      </div>
      <div className="divider divider-secondary mx-20 "></div>
      <div className="footer px-12 ml-12 p-10">
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> 
        <form>
          <h6 className="footer-title">Newsletter</h6> 
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Footer