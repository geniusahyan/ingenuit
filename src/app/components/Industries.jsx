import React from 'react'

const Industries = () => {

    const Product = [
        { title:"Education", image:"/education.png" },
        { title:"Manufacturing", image:"/manufacturing.png" },
        { title:"Communication", image:"/communication.png" },
        { title:"Film Industry", image:"/film.png" },
        { title:"Hotel", image:"/hotel.png" },
        { title:"Travel", image:"/travel.png" },
        { title:"Finance", image:"/finance.png" },
        { title:"HealthCare", image:"/healthcare.png" },
        { title:"Ecommerce", image:"/ecommerce.png" },
        { title:"Construction", image:"/construction.png" }
    ]

  return (
    <section className="w-screen flex flex-col justify-between items-center py-20 h-screen bg-[white] ">
        <div className='text-center w-[50rem]' >
            <h1 className='font-bold text-[2rem] capitalize ' ><span className='font-thin' >our</span> Industries</h1>
            <p className='text-xl font-sans text-[#232748]' >we are future tech partner for more than <span className='text-[red] text-2xl ' >8</span> Industries, worked with <span className='text-[red] text-2xl ' >200</span> plus prospects for beyond <span className='text-[red] text-2xl ' >15</span> product across <span className='text-[red] text-2xl ' >10</span> countries around the globe.</p>
        </div>
        <div className='grid grid-rows-2 grid-cols-6 grid-flow-col w-full h-full py-6 mt-4 px-16 gap-4 ' >
            <div className="d col-start-1 px-2 col-end-3 grid place-items-center border-2 ">
                <h1 className='text-2xl text-[#232748]' >Our Products are Excellent! So We Are</h1>
            </div>
            {
                Product.map((item, index)=>{
                    return (
                        <div className=" border-2 flex justify-between flex-col py-2 items-center " key={index}>
                            <img src={item.image} alt={item.title} />
                            <h1>{item.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Industries