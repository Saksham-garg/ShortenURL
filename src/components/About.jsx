import React from 'react'
import {aboutContent} from './about-content'
import Cards from './Cards'
function About() {
  return (
    <div className='about--section'>
        {
            aboutContent.map((data,key)=>{
                return <Cards key={key} info = {data} img ={data.iurl}></Cards>;
            })
        }  
    </div>
  )
}

export default About