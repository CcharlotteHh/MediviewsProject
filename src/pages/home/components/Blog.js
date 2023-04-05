import React from 'react'

function Blog({img, desc, date}) {
  return (
    <div className='blogCard'>
      <figure>
        <img src={img} alt="blogImg"/>          
      </figure>
      <div className='blogText'>
        <p>{desc}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Blog
