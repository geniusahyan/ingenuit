import React from 'react'
import Image from 'next/image';

const Blog = () => {


  const blogProduct = [
    { title:"facebook is testing cta...", image:"/social-media.png", color:"yellow", border:"white" },
    { title:"role of travel portal api", image:"/Travel-software.jpg", color:"white", border:"yellow" },
    { title:"wordpress 5.0 'bebo&#'", image:"/WordPress-website.png", color:"yellow", border:"white" },
    { title:"benefits of outsourcing wor...", image:"/wordpress.png", color:"#0a0a49", border:"white" },
    { title:"top social media strategies...", image:"/Stickers-stories.png", color:"white", border:"yellow" },
    { title:"best wordpress eso plugin", image:"/Best-WordPress.png", color:"yellow", border:"white" }
  ]

  return (
    <section className='grid blogSection grid-rows-2 grid-cols-4 w-screen h-screen py-24 grid-flow-col mt-6 px-16 gap-2 ' >
      <div className="bg-[#0a0a49] flex justify-center items-center text-white p-4 col-start-1 col-end-3">
        <a className="w-full blogSvg p-4 h-full flex justify-center relative items-center" href="#">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {/* Center the rect in the SVG */}
            <rect className="stroke-slate-100 transition-all duration-[0.6s] " fill="transparent" strokeWidth="1" width="225%" height="100%" x="-63%"></rect>
          </svg>
          <div className='flex p-4 gap-2 justify-center items-center w-full m-0 h-full' >
            <div className='w-1/2'>
              <Image src={"/SEO-tools.jpg"} width={250} height={100} alt='Financial Icon' />
            </div>
            <div className='w-1/2 uppercase flex justify-center items-center text-xl '>
              essential seo ranking factors to consider in 2019
            </div>
          </div>
        </a>
      </div>

      
      {
        blogProduct.map((item, index) => (
          <div key={index} style={{background:item.color, color:item.border}} className=" flex justify-center items-center text-white p-2">
            <a className="w-full blogSvg p-4 h-full flex justify-center relative items-center" href="#">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <rect stroke={item.border} className="transition-all duration-[0.8s] " fill="transparent" strokeWidth="1" width="100%" height="100%" />
              </svg>
              <div className='flex flex-col gap-2 p-4 justify-center items-center w-full m-0 h-full' >
                <div className='w-1/2'>
                  <Image src={item.image} width={250} height={100} alt='Financial Icon' />
                </div>
                <div className='w-1/2 uppercase flex justify-center items-center text-xl '>
                  {item.title}
                </div>
              </div>
            </a>
          </div>
        ))
      }

    </section>
  )
}

export default Blog