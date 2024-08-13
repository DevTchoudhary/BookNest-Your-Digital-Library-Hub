import React from 'react'


function Cards({item}) {
    console.log(item);
  return (
    <>
      <div className='mt-10 my-4 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image} 
    alt="Images are not supported by your browser"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify justify-between">
      <div className="badge badge-outline">₹{item.price}</div>
      <div className="badge badge-outline border-black-[2px] hover:bg-pink-500 hover:text-white hover:p-2 hover:px-6 hover:py-3 duration-200">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  
  )
}

export default Cards