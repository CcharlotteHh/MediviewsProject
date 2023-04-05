import React from 'react'

function BlogCard({img, desc, date,isLargeRow }) {
  return (
 <div  className={`blogCard ${isLargeRow && "row__posterLarge"}`}>
      
    <figure className='blogCardImg'>
      <img src={img} alt="blogImg"/>          
    </figure>
    <div className='blogText'>
      <p>{desc}</p>
      <p>{date}</p>
    </div>
    </div>
  )
}

export default BlogCard
