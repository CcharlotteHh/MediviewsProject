import React from 'react';
import BlogCard from './BlogCard';

function Blog({title}) {
  return (

    <div className='blog'>
      <h1>{title}</h1>
      <div className='blogCardContainer'>
   <BlogCard></BlogCard>
   <BlogCard></BlogCard>
   <BlogCard></BlogCard>
   <BlogCard isLargeRow/>
      </div>
    </div>
  )
}

export default Blog
